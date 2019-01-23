// import * as UserActions from './UserActions';
import {
  USER_ACTION,
} from './UserActions';

const UserDefaultState = {
  temporaryAdmin: false,
  user: '',
};

export type UserState = typeof UserDefaultState;

export const UserReducer = (state: UserState, action: USER_ACTION): UserState => {
  switch (action.type) {
    case 'USER_RETREIVED_FROM_API':
      return { ...state, user: action.user, temporaryAdmin: false };
    case 'NEW_USER_CREATED':
      return { ...state, user: action.user, temporaryAdmin: action.temporaryAdmin };
    default:
      return { ...state, ...UserDefaultState };
  }
};
