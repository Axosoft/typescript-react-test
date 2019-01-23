import { max, reduce } from 'ramda';

import { ConstantString, ThunkResult } from '../index';

export const createTodo = (text: string): ThunkResult<void> => (dispatch, getState) => {
  const { Todo: { todos } } = getState();
  const maxId = reduce((acc, elem) => max(elem.id, acc), 0, todos);
  dispatch(TodoCreated(text, maxId + 1));
};

export const TodoCreated = (text: string, id: number) => {
  return {
    todo: {
      id,
      text,
    },
    type: ConstantString('TODO_CREATED'),
  };
};

export type TODO_ACTION =
  ReturnType<typeof TodoCreated>;
