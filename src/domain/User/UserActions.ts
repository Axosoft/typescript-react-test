import { ThunkResult, typeString } from '../index';

/* action thunks */
export const fetchUser = (): ThunkResult<void> => (dispatch) => {
  // pretend this is an API call
  setTimeout(() => {
    dispatch(userRetreivedFromApi('hello'));
  }, 200);
};

export const createNewUser = (name: string, age: number): ThunkResult<void> => (dispatch) => {
  // pretend this is an API call
  setTimeout(() => {
    dispatch(newUserCreated(name, age));
  }, 200);
};

/* action creators */
// ok I know these do the same thing but the assumption
// is that they'd do different things and I'm just not very creative rn
export const userRetreivedFromApi = (user: string) => ({
  type: typeString('USER_RETREIVED_FROM_API'),
  user,
});

export const newUserCreated = (name: string, age: number) => ({
  age,
  type: typeString('NEW_USER_CREATED'),
  user: name,
});

export type USER_ACTION =
  ReturnType<typeof userRetreivedFromApi> |
  ReturnType<typeof newUserCreated>;
