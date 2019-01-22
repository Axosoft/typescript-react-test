export const USER_RETREIVED_FROM_API = 'USER_RETREIVED_FROM_API';

export const setUser = (user: string) => ({ type: USER_RETREIVED_FROM_API as typeof USER_RETREIVED_FROM_API, user });
