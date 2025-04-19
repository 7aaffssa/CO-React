import { configureStore } from "@reduxjs/toolkit";
import panierReducer from "./components/Slice/panierSlice";

export const store = configureStore({
  reducer: {
    panier: panierReducer,
  },
});

export const getRootState = () => store.getRootState();
export const dispatch = store.dispatch;
