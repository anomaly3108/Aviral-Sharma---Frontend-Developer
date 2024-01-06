import { createSlice } from "@reduxjs/toolkit";

const RocketSlice = createSlice({
    name: "Rockets",
    initialState:{
        items:[]
    },
    reducers:{
        addRocket:(state, action)=>{
            let newstate = {items:[...action.payload]}
            return newstate
        }
    }
})

export const {addRocket, clearRocket} = RocketSlice.actions;

export default RocketSlice.reducer;