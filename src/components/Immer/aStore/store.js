import { createStore } from "redux";
import panierReducer from "../reducers/panierReducers";

const store = createStore(
    panierReducer
);

export default store;
