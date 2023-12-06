import React, { lazy, Suspense, useContext } from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header"
import { Body } from "./components/Body";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import About from "./components/About"
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import 'keen-slider/keen-slider.min.css'
import { UserContext } from "./utils/UserContext";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import appStore from "./utils/store/appStore";
//Chunking
//Lazy-loading
//Code-splitting
//Dynamic Bundling
//On demand loading
//dynamic importing
const Grocery=lazy(()=>{
   return  import("./components/Grocery")
})

const AppLayout=()=>{
    
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:"Sriyansh Jain"}}>
        <div className="app">
           
            <Header/>
            <Outlet/>
           
        </div>
        </UserContext.Provider>
        </Provider>
    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
                
            },
            {
                path:"/about",
                element:<About/>,
                
            },
            {
                path:"/contact",
                element:<ContactUs/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            }
        ],
        errorElement:<Error/>
    }
 
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
