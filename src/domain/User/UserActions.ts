import { ConstantString, ThunkResult } from '../index';

/* action thunks */
export const fetchUser = (): ThunkResult<void> => (dispatch) => {
  // pretend this is an API call
  setTimeout(() => {
    dispatch(UserRetreivedFromApi('asdf'));
  }, 200);
};

export const createNewUser = (name: string, age: number): ThunkResult<void> => (dispatch) => {
  // pretend this is an API call
  setTimeout(() => {
    dispatch(NewUserCreated(name, age));
  }, 200);
};

/* action creators */
// ok I know these do the same thing but the assumption
// is that they'd do different things and I'm just not very creative rn
export const UserRetreivedFromApi = (user: string) => ({
  type: ConstantString('USER_RETREIVED_FROM_API'),
  user,
});

export const NewUserCreated = (name: string, age: number) => ({
  age,
  type: ConstantString('NEW_USER_CREATED'),
  user: name,
});

export type USER_ACTION =
  ReturnType<typeof UserRetreivedFromApi> |
  ReturnType<typeof NewUserCreated>;
