import * as React from 'react';
import { connect } from 'react-redux';
import './App.css';

import { IRootState, ThunkDispatch } from './domain/index';
import { createNewUser, fetchUser } from './domain/User/UserActions';
import logo from './logo.svg';

interface IAppState {
  thing: string;
}

const mapStateToProps = (state: IRootState) => ({
  user: state.User.user,
});

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  login: () => dispatch(fetchUser()),
  replaceUser: () => dispatch(createNewUser('chuck', 10)),
});

// // the old way to do things
// interface IAppProps {
//   user: string;
//   login: () => void;
//   replaceUser: () => void;
// }

// if you need custom props
interface ICustomProps {
  requiredProp: string;
  optionalProp?: number;
}

// the new way
type APP_PROPS = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps> & ICustomProps;

class App extends React.Component<APP_PROPS, IAppState> {
  constructor(props: APP_PROPS) {
    super(props);
    this.state = {
      thing: 'asdf',
    };
  }
  public componentDidMount() {
    this.props.login();
  }
  public render() {
    const {
      login,
      replaceUser,
    } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={replaceUser}>New User</button>
        <button onClick={login}>Old User</button>
        <p>user: {this.props.user}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
