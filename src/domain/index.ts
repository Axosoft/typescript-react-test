import { combineReducers, createStore } from 'redux';
import { UserReducer, UserState } from './User/UserReducer';

export interface StoreState {
  User: UserState
}
export const store = createStore<StoreState, any, any, any>(combineReducers({
  User: UserReducer
}));
