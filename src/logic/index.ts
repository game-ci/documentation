import { combineReducers } from 'redux';

import { versionsReducer as versions } from './versions/index';

export const reducer = combineReducers({
  versions,
});

export const saga = () => {};
