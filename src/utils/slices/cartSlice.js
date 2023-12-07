import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        //mutating the state    
        addItems:(state,action)=>{
          state.items.push(
            {item:action.payload,
             quantity:1
            }
            )
        },
        increaseItemQuantity:(state,action)=>{
          const id=action.payload;
          const itemToBeIncreased= state.items.find((cartItem)=>cartItem?.item?.card?.info?.id===id)
          if(itemToBeIncreased)
          itemToBeIncreased.quantity+=1;
        },
        decreaseItemQuantity:(state,action)=>{
            const id=action.payload;
            const itemToBeDecreased= state.items.find((cartItem)=>cartItem?.item?.card?.info?.id===id)
            if(itemToBeDecreased && itemToBeDecreased.quantity>1)
            itemToBeDecreased.quantity-=1;
          },
        removeItem:(state,action)=>{
            const id=action.payload;
            state.items=state.items.filter((cartItem)=>cartItem?.item?.card?.info?.id!==id)
        },
        clearCart:(state,action)=>{
           // state.items.length=0
           return {items:[]}
        }
    }
})
export const {addItems,removeItem,clearCart,increaseItemQuantity,decreaseItemQuantity} =cartSlice.actions;
export default cartSlice.reducer