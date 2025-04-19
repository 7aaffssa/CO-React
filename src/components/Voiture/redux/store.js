// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import simulationReducer from './simulationSlice';

export default configureStore({
  reducer: {
    simulations: simulationReducer
  }
});
