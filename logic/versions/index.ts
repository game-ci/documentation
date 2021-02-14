import { combineReducers } from 'redux';
import { selectedVersionSlice } from './selected-version-slice';

export const versionsReducer = combineReducers({
  selected: selectedVersionSlice.reducer,
});

export const versionsSaga = () => {};
