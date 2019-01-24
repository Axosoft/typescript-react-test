import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Button } from './components/primitives/Button';
import { Todo } from './components/Todo';
import { TodoForm } from './components/TodoForm';
import { IRootState, ThunkDispatch } from './domain/index';
import { createTodo } from './domain/Todo/TodoActions';
import { ITodo } from './domain/Todo/TodoReducer';
import { createNewUser, fetchUser } from './domain/User/UserActions';
// import logo from './logo.svg';

interface IAppState {
  thing: string;
  newUserSubmitting: boolean;
}

const mapStateToProps = (state: IRootState) => ({
  temporaryAdmin: state.User.temporaryAdmin,
  todos: state.Todo.todos,
  user: state.User.user,
});

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  login: () => dispatch(fetchUser()),
  makeTodo: (name: string) => dispatch(createTodo(name)),
  replaceUser: () => dispatch(createNewUser('chuck', true)),
});

// if you need custom props
interface ICustomProps {
  requiredProp: string;
  optionalProp?: number;
}

// the new way
type APP_PROPS = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps> & ICustomProps;

const BlueButton = styled(Button)`
  color: blue;
  border-color: blue;
`;

const getTodoList = (todos: ITodo[]) =>
  todos.map((todo) => (
    <Todo key={todo.id} todo={todo} />
  ));

class App extends React.Component<APP_PROPS, IAppState> {
  constructor(props: APP_PROPS) {
    super(props);
    this.state = {
      newUserSubmitting: false,
      thing: 'asdf',
    };
  }
  public componentDidMount() {
    this.props.login();
  }
  public render() {
    const {
      login,
      temporaryAdmin,
      todos,
      makeTodo,
      user,
    } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button onClick={this.replaceUser} primary>{this.state.newUserSubmitting ? 'loading.....' : 'New User'}</Button>
        <Button onClick={login}>Old User</Button>
        <BlueButton onClick={() => makeTodo('asdf')}>Make Todo</BlueButton>
        <BlueButton onClick={() => makeTodo('asdf')}>Make Todo 2</BlueButton>
        <p>user: {user}</p>
        <p>Temporary Admin?: {String(temporaryAdmin)}</p>
        <ul>
          {getTodoList(todos)}
        </ul>
        <TodoForm />
      </div>
    );
  }
  private replaceUser = () => {
    this.setState({
      newUserSubmitting: true,
    });
    this.props.replaceUser()
      .then(() => {
        this.setState({
          newUserSubmitting: false,
        });
      });
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
