import { combineReducers } from 'redux';
import { counterSlice } from './counter/counter-slice';
import { versionsReducer } from './versions';

export const reducer = combineReducers({
  counter: counterSlice,
  versions: versionsReducer,
});

export const saga = () => {};
