import { createSlice } from "@reduxjs/toolkit";

const RocketSlice = createSlice({
    name: "Rockets",
    initialState:{
        items:[]
    },
    reducers:{
        addRocket:(state, action)=>{
            // console.log(action.payload)
            state.items.push(action.payload)
        },
        
        clearRocket:(state)=>{
            state = []
        }
    }
})

export const {addRocket, clearRocket} = RocketSlice.actions;

export default RocketSlice.reducer;