import * as React from 'react';
import { connect } from 'react-redux';
import './App.css';

import { IRootState, ThunkDispatch } from './domain/index';
import { fetchUser } from './domain/User/UserActions';
import logo from './logo.svg';

interface IAppProps {
  user: string;
  login: typeof fetchUser;
}

interface IAppState {
  thing: string;
}

const mapStateToProps = (state: IRootState) => ({
  user: state.User.user,
});

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  login: () => dispatch(fetchUser()),
});

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      thing: 'asdf',
    };
  }
  public componentDidMount() {
    this.props.login();
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>usaer: {this.props.user}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
