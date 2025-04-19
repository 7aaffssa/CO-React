export const ADD_SIMULATION = 'ADD_SIMULATION';

export const addSimulation = (simulation) => {
    return {
        type: ADD_SIMULATION,
        payload: simulation
    };
};