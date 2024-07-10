import {combineReducers, legacy_createStore} from '@reduxjs/toolkit';
import {counterReducer} from './counterRedcer';
import {settingsReducer} from './settingsReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  settingsCounter: settingsReducer
})

export const store = legacy_createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>



