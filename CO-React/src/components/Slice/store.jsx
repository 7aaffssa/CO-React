import { configureStore, createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload
      });
    },
    deleteItem: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItem, deleteItem } = listSlice.actions;

export default configureStore({
  reducer: {
    items: listSlice.reducer,
  },
});
