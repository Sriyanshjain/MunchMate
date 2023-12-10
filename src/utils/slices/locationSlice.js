import { createSlice } from "@reduxjs/toolkit";
const locationSlice=createSlice({
    name:"location",
    initialState:{
        address:{ latitude: "12.9715987", longitude: "77.5945627" }
    },
    reducers:{
        setAddress:(state,action)=>{
            state.address=action.payload;
        }
    }

})
export const {setAddress} =locationSlice.actions;
export default locationSlice.reducer