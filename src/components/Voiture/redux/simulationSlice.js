// redux/simulationSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const simulationSlice = createSlice({
  name: 'simulations',
  initialState: [],
  reducers: {
    addSimulation: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addSimulation } = simulationSlice.actions;
export default simulationSlice.reducer;
