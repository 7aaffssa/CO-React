import { ADD_SIMULATION } from '../actions/simulationActions';

const initialState = {
    simulations: []
};

const simulationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SIMULATION:
            return {
                ...state,
                simulations: [...state.simulations, action.payload]
            };
        default:
            return state;
    }
};

export default simulationReducer;