// import * as UserActions from './UserActions';
import {
  USER_ACTION,
} from './UserActions';

const UserDefaultState = {
  age: 0,
  user: '',
  userIsNew: false,
};

export type UserState = typeof UserDefaultState;

export const UserReducer = (state: UserState, action: USER_ACTION): UserState => {
  switch (action.type) {
    // again, I'm not very creative, but irl you'd do different things for these different actions
    case 'USER_RETREIVED_FROM_API':
      return { ...state, user: action.user, userIsNew: false };
    case 'NEW_USER_CREATED':
      return { ...state, user: action.user, age: action.age, userIsNew: true };
    default:
      return { ...state, ...UserDefaultState };
  }
};
