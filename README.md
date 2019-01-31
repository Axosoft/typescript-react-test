This repo investigates how to type our reducers, actions, thunks and action creators, mapstate and mapdispatch functions, etc. I've created it to solicit feedback before work on the new account site begins, but it is not in any way meant to be authoritative. While it will act as a guide, actual implementation may differ moving forward with no expectation that this repo be updated to match.

I left all the default tsconfigs alone from create-react-app. I'm assuming we'll want to look into changing them. I also have no idea if this code splits or what browser support it has, so that's further research to do.

The `master` branch is purely for experimenting with typescript. Other branches may be created so we can try out different features we're also evaluating for use on the upcoming account site rewrite. One such branch is the `styled-components` branch, which has been ejected from create-react-app as well.

## Redux Guide

### Actions
For this, assume the following example redux action in the UserActions file:
```ts
{
  type: 'TEST_USER_ACTION',
  data1: 'asdf',
  data2: 12
}
```
All actions must have action creators that are functions which return standard redux action objects. Action creators should be named the camel case version of the action type string, starting with a capital letter. The 'type' value in the object returned by the action creator must be ConstantString('ACTION_TYPE_STRING').  
For the example action above, this is its action creator:
```ts
export const TestUserAction = (data1: string, data2: number) => ({
  data1: 'asdf',
  data2: 12,
  type: ConstantString('TEST_USER_ACTION'), // our tslint config enforces alphabetical ordering in object literals
});
```

> ConstantString is simply a function that returns the string you passed in, but typed in such a way that typescript infers its type as that specific string instead of `string`.

You must add the action to the action type definition at the bottom of the appropriate actions file to register its type. You won't be able to dispatch the action or use it in a reducer at all if you forget to do this:  
```ts
// if we're working in UserActions.ts, this is at the bottom
export type USER_ACTION =
  //... other action definitions
  ReturnType<typeof OtherActionCreatorThatWasAlreadyThere> |
  ReturnType<typeof TestUserAction>;
```
Note that all the items in the list must have a vertical bar at the end, except the last one, which needs a semicolon.

> `ReturnType<typeof actioncreator>` is why we needed ConstantString. With it, the return type of the action creator function is something like `{type: 'SOME_ACTION_STRING'}`, which means in the reducer, when you switch on action.type, you get a list of the actual strings and typescript can tell what the rest of the action object looks like based on which case you're in

> `USER_ACTION` is simply the merged type of all the action creator return types. The less fancy way of doing all this would be to define an interface for every action you have, and union all the interfaces together, but that felt like a lot of typing to us.

If you need to add a whole new store, basically copy the existing stores but don't forget to augment ROOT_ACTION and IRootState, and register the reducer in combineReducers in index.ts.
