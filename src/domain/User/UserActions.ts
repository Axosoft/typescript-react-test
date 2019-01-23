import { ConstantString, ThunkResult } from '../index';

/* action thunks */
export const fetchUser = (): ThunkResult<void> => (dispatch) => {
  // pretend this is an API call
  setTimeout(() => {
    dispatch(UserRetreivedFromApi('asdf'));
  }, 0);
};

export const createNewUser = (name: string, temporaryAdmin: boolean): ThunkResult<Promise<null>> => (dispatch) =>
  // pretend this is an API call
  new Promise((resolve) => {
    setTimeout(() => {
      dispatch(NewUserCreated(name, temporaryAdmin));
      resolve();
    }, 600);
  });

/* action creators */
export const UserRetreivedFromApi = (user: string) => ({
  type: ConstantString('USER_RETREIVED_FROM_API'),
  user,
});

export const NewUserCreated = (name: string, temporaryAdmin: boolean) => ({
  temporaryAdmin,
  type: ConstantString('NEW_USER_CREATED'),
  user: name,
});

export type USER_ACTION =
  ReturnType<typeof UserRetreivedFromApi> |
  ReturnType<typeof NewUserCreated>;
