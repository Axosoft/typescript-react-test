import { Dispatch } from 'redux';

import { ThunkResult } from '../index';

export const USER_RETREIVED_FROM_API = 'USER_RETREIVED_FROM_API';
export const NEW_USER_CREATED = 'NEW_USER_CREATED';

export const getUser = (): ThunkResult<void> => (dispatch) => {
  // pretend this is an API call
  console.log('get user initial')
  setTimeout(() => {
    console.log('get user!!!')
    dispatch(setUser('hello'));
  }, 200);
};

export const newUser = (name: string, age: number): ThunkResult<void> => (dispatch) => {
  // pretend this is an API call
  setTimeout(() => {
    dispatch(setNewUser(name, age))
  }, 200);
}

// ok I know these do the same thing but the assumption is that they'd do different things and I'm just not very creative
export const setUser = (user: string) => ({
  type: USER_RETREIVED_FROM_API as typeof USER_RETREIVED_FROM_API,
  foo: 'asdf',
  user
});

export const setNewUser = (name: string, age: number) => ({
  type: NEW_USER_CREATED as typeof NEW_USER_CREATED,
  user: `${name}: ${age}`
});


export type USER_ACTION =
  ReturnType<typeof setUser> |
  ReturnType<typeof setNewUser>;
