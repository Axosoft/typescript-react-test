// import * as React from 'react';
// import { connect } from 'react-redux';

// import { ThunkDispatch } from 'src/domain';
// import { TodoDeleted } from 'src/domain/Todo/TodoActions';
// import { ITodo } from '../domain/Todo/TodoReducer';
// import { DangerButton } from './primitives/Button';

// interface ITodoCustomProps {
//   todo: ITodo;
// }

// const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
//   delete: (id: number) => () => dispatch(TodoDeleted(id)),
// });

// type TODO_PROPS = ReturnType<typeof mapDispatchToProps> & ITodoCustomProps;

// const TodoComponent = (props: TODO_PROPS) => (
//   <li>
//     {props.todo.text}
//     <DangerButton onClick={props.delete(props.todo.id)}>delete</DangerButton>
//   </li>
// );

// export const Todo = connect(null, mapDispatchToProps)(TodoComponent);
