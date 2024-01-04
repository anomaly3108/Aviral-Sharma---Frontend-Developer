import { configureStore } from "@reduxjs/toolkit";
import RocketSlice from "./RocketSlice";

const store = configureStore({
    reducer:{
        rockets: RocketSlice
    }
});

export default store;