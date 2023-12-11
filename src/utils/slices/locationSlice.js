import { createSlice } from "@reduxjs/toolkit";
const locationSlice=createSlice({
    name:"location",
    initialState:{
        address: JSON.parse(localStorage.getItem('address'))||{ latitude: "12.9715987", longitude: "77.5945627",locationAllowed:false}
    },
    reducers:{
        setAddress:(state,action)=>{
            state.address=action.payload;
            localStorage.setItem('address', JSON.stringify(state.address));
        }
    }

})
export const {setAddress} =locationSlice.actions;
export default locationSlice.reducer