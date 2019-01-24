import {
  append,
  assoc,
  indexBy,
  pipe,
} from 'ramda';

import {
  TODO_ACTION,
} from './TodoActions';

export interface ITodo {
  id: number;
  text: string;
}

interface ITodoByIdMap {
  [key: string]: ITodo;
}

const TodoDefaultState = {
  todoByIdMap: {} as ITodoByIdMap,
  todos: [] as ITodo[],
};

export type TODO_STATE = typeof TodoDefaultState;

export const TodoReducer = (state: TODO_STATE, action: TODO_ACTION): TODO_STATE => {
  switch (action.type) {
    case 'TODO_CREATED':
      const { todos } = state;
      const newTodos = append(action.todo, todos) as ITodo[];
      return pipe(
        assoc('todos', newTodos),
        assoc('todoByIdMap', indexBy((t) => String(t.id), newTodos)),
      )(state);
    default:
      return { ...TodoDefaultState,  ...state };
  }
};
