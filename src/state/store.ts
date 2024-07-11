import {combineReducers, legacy_createStore} from '@reduxjs/toolkit';
import {counterReducer} from './counterRedcer';

const rootReducer = combineReducers({
  counter: counterReducer
})

export const store = legacy_createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>



