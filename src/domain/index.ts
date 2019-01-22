import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk, { ThunkDispatch as DefaultThunkDispatch, ThunkAction } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { UserReducer, UserState } from './User/UserReducer';
import { USER_ACTION } from './User/UserActions';

// R is the return type of the thunk, in case you want to return a promise or something
export type ThunkResult<R> = ThunkAction<R, RootState, null, ROOT_ACTION>
export type ThunkDispatch = DefaultThunkDispatch<RootState, null, ROOT_ACTION>

export interface RootState {
  User: UserState
}

const rootReducer = combineReducers<RootState>({
  User: UserReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(ReduxThunk)
  )
);

// this would be a union of all the action types from the various action files
export type  ROOT_ACTION = USER_ACTION;
