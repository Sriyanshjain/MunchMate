import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import {
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItem,
} from "../utils/slices/cartSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const modifyCartValues = () => {
    var totalPrice = 0;
    cartItems.forEach((obj) => {
      const price =
        (obj?.item?.card?.info?.price || obj?.item?.card?.info?.defaultPrice) *
          (obj?.quantity || 0);
      totalPrice += price;
    });
    setTotal(totalPrice/100);
  };
  useEffect(() => {
    modifyCartValues();
  }, [cartItems]);
  const handleClear = () => {
    dispatch(clearCart());
  };
  const increaseQuantity = (id) => {
    dispatch(increaseItemQuantity(id));
  };
  const decreaseQuantity = (id) => {
    dispatch(decreaseItemQuantity(id));
  };
  const removeItemFromCart = (id) => {
    dispatch(removeItem(id));
  };

  if (cartItems.length == 0) {
    return (
      <div className="items-center flex flex-col  container-max min-h-screen justify-center">
        <div>
        <p className=" text-3xl font-semibold font-primary my-auto">
          Such empty...
         
        </p>
        </div>
        <div>
        <Link to="/">
          <button className="p-4 mt-4 font-bold bg-orange-400 text-white block text-xl rounded-lg">
            EXPLORE RESTAURANTS NEAR YOU
          </button>
        </Link>
        </div>
       
      </div>
    );
  }
  return (
    <div className="justify-center">
      <div className="flex flex-col w-full lg:w-10/12 md:flex-row md:max-h-screen  md:justify-center mx-auto    ">
        <div className="w-full md:w-7/12 md:overflow-y-auto example  md:mt-10">
          <div className="flex justify-between">
            <p className=" text-xl sm:text-3xl font-bold font-primary m-2 p-2">
              Cart
            </p>
            <button
              className="text-white bg-black rounded-lg p-2 m-2 "
              onClick={handleClear}
            >
              Clear cart
            </button>
          </div>
          {/* cart item card */}
          {cartItems.map((item) => {
            return (
              <div key={item?.item?.card?.info?.id}>
                <div className="flex justify-center shadow-lg rounded-lg border border-gray-200 mx-4">
                       {/* image section */}
                  <div className="sm:w-3/12 md:w-4/12 w-4/12 p-2  sm:p-4 mt-5 sm:mt-2 relative">
                    {item?.item?.card?.info?.imageId ? (
                      <img
                        src={CDN_URL + item?.item?.card?.info?.imageId}
                        className=" bg-center w-full h-32 aspect-video object-cover rounded-md  shadow-lg border border-gray-200"
                      />
                    ) : (
                      <img
                        src={require("../assets/sample.png")}
                        alt=""
                        className="w-[50%] sm:w-full  bg-center rounded-lg shadow-lg border border-gray-200"
                      />
                    )}
                    <div className="flex">
                      <button
                        className="w-8 h-8 mt-5 mx-auto bg-white text-orange-400 border-2 rounded-lg font-bold border-orange-400 hover:text-white hover:bg-orange-400 disabled:cursor-not-allowed"
                        disabled={item?.quantity === 1}
                        onClick={() =>
                          decreaseQuantity(item?.item?.card?.info?.id)
                        }
                      >
                        -
                      </button>
                      <p className="mt-5 px-1 text-lg font-semibold">
                        {" " + item?.quantity + " "}
                      </p>
                      <button
                        className="w-8 h-8 mt-5 mx-auto bg-white text-orange-400 border-2 rounded-lg font-bold border-orange-400 hover:text-white hover:bg-orange-400"
                        onClick={() =>
                          increaseQuantity(item?.item?.card?.info?.id)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  {/* details section */}
                  <div className=" p-2 sm:p-4 mt-5 sm:mt-2 w-8/12 md:w-8/12  sm:w-9/12">
                    {item?.item?.card?.info?.itemAttribute?.vegClassifier && (
                      <img
                        src={
                          item?.item?.card?.info?.itemAttribute
                            ?.vegClassifier === "VEG"
                            ? require("../assets/veg.png")
                            : require("../assets/non-veg.png")
                        }
                        alt=""
                        className="sm:w-10 w-6 h-7 bg-center sm:h-9 p-1 rounded-lg"
                      />
                    )}

                    <p className="p-1 text-sm sm:text-xl font-primary font-bold text-black-heading">
                      {item?.item?.card?.info?.name}
                    </p>
                    <p className="p-1 text-black-heading font-bold  text-xs sm:text-lg">
                      ₹
                      {(item?.item?.card?.info?.price ||
                        item?.item?.card?.info?.defaultPrice) /
                        100}{" "}
                      (
                      {(item?.item?.card?.info?.price ||
                        item?.item?.card?.info?.defaultPrice) /
                        100}
                      ⨯ {item?.quantity})
                    </p>

                    <button
                      className="p-2 mt-14 sm:mt-8 md:mt-7 lg:mt-7 float-right bg-white text-orange-400 border-2 rounded-lg font-bold border-orange-400 hover:text-white hover:bg-orange-400"
                      onClick={() =>
                        removeItemFromCart(item?.item?.card?.info?.id)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <hr className="mt-3"></hr>
              </div>
            );
          })}
        </div>
        {/* Price card */}
        <div className=" w-11/12 mx-5 md:w-5/12  md:h-min md:mx-5 border border-gray bg-white rounded-lg shadow-lg my-2  sm:mx-8  ">
          <div className="sm:p-8 p-4">
            <h1 className="font-primary font-bold text-2xl text-black ml-2">
              Order Summary
            </h1>
            <hr className="my-4 mx-2 p-2"></hr>

            <div className="flex justify-between mx-3 my-3">
              <p className="text-xl font-normal">
                Price ({cartItems.length} items)
              </p>
              <p className="text-xl font-semibold">₹ {total}</p>
            </div>
            <div className="flex justify-between mx-3 my-4">
              <p className="text-xl font-normal">Discount (10%)</p>
              <p className="text-xl font-semibold">
                -₹ {(0.1 * total).toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between mx-3 my-4">
              <p className="text-xl font-normal">Delivery charges (5%)</p>
              <p className="text-xl font-semibold">
                +₹ {(0.05 * total).toFixed(2)}
              </p>
            </div>
            <p className="mx-3 my-1">
              {" "}
              You'll save ₹{(0.1 * total).toFixed(2)} on this order 🎉
            </p>
            <hr className="mt-4 mx-2 p-2"></hr>
            <div className="flex justify-between mx-3">
              <p className=" text-2xl lg:text-3xl font-primary font-bold">Total Amount</p>
              <p className=" text-2xl lg:text-3xl font-bold">
                ₹ {(total - 0.1 * total + 0.05 * total).toFixed(2)}
              </p>
            </div>
            <hr className="my-4 mx-2 p-2"></hr>
            <button className="w-full p-4 mx-auto font-bold bg-orange-400 text-white text-xl rounded-lg">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
