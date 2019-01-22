import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { UserReducer, UserState } from './User/UserReducer';

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
