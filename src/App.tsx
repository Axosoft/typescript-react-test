import * as React from 'react';
import { connect } from 'react-redux';
import './App.css';

import { Button } from './components/utility/Button';
import { IRootState, ThunkDispatch } from './domain/index';
import { createNewUser, fetchUser } from './domain/User/UserActions';
import logo from './logo.svg';

interface IAppState {
  thing: string;
  newUserSubmitting: boolean;
}

const mapStateToProps = (state: IRootState) => ({
  temporaryAdmin: state.User.temporaryAdmin,
  user: state.User.user,
});

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  login: () => dispatch(fetchUser()),
  replaceUser: () => dispatch(createNewUser('chuck', true)),
});

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
      user,
    } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.replaceUser}>{this.state.newUserSubmitting ? 'loading.....' : 'New User'}</button>
        <button onClick={login}>Old User</button>
        <p>user: {user}</p>
        <p>Temporary Admin?: {String(temporaryAdmin)}</p>
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
