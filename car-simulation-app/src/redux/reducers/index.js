import { combineReducers } from 'redux';
import simulationReducer from './simulationReducer';

const rootReducer = combineReducers({
    simulations: simulationReducer,
});

export default rootReducer;