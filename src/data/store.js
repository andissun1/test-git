import { applyMiddleware, combineReducers, legacy_createStore } from '@reduxjs/toolkit';
import { firstReducer } from './firstReducer';
import { secondReducer } from './secondReducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  todoState: firstReducer,
  helperState: secondReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
