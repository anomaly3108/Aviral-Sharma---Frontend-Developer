import { createSlice } from "@reduxjs/toolkit";

const RocketSlice = createSlice({
    name: "Rockets",
    initialState:{
        items:[]
    },
    reducers:{
        addRocket:(state, action)=>{
            // console.log(action.payload)
            let newstate = {items:[...action.payload]}
            return newstate
            
        },
        
        clearRocket:(state)=>{
            state = []
        }
    }
})

export const {addRocket, clearRocket} = RocketSlice.actions;

export default RocketSlice.reducer;