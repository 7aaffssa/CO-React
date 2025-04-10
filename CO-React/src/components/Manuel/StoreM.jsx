import { createStore } from 'redux';

const initialState = [];

const ADD_ITEM = 'ADD_ITEM';

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item
});

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default createStore(listReducer);