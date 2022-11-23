import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./store.jsx";
const store = configureStore(reducer);
export default store;
