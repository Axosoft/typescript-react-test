// import * as UserActions from './UserActions';
import {
  NEW_USER_CREATED,
  USER_ACTION,
  USER_RETREIVED_FROM_API,
} from './UserActions';

export interface UserState {
  user: string,
  userIsNew: boolean
};

export const UserReducer = (state: UserState, action: USER_ACTION): UserState => {
  switch (action.type) {
    // again, I'm not very creative, but irl you'd do different things for these different actions
    case USER_RETREIVED_FROM_API:
      return { ...state, user: action.user, userIsNew: false }
    case NEW_USER_CREATED:
      return { ...state, user: action.user, userIsNew: true }
  }
}
