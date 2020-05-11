import { combineReducers } from 'redux';
import * as types from './types';

const initialState = {};

const firstReducer = (state = 0, { type, payload }) => {
    switch (type) {
        default:
            return state;
    }
};

const secondReducer = (state = initialTimerState, { type, payload }) => {
    switch (type) {
        default:
            return state;
    }
};

// COMBINED REDUCERS
const reducers = {};

export default combineReducers(reducers);
