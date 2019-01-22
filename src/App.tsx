import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import { connect } from 'react-redux';
import { RootState } from './domain';
import { getUser } from './domain/User/UserActions';

interface AppProps {
  user: string,
  login: typeof getUser
}

interface AppState {
  thing: string
}

const mapStateToProps = (state: RootState) => ({
  user: state.User.user
})

const mapDispatchToProps = (dispatch: any) => ({
  login: () => dispatch(getUser())
})

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      thing: 'asdf'
    }
  }
  componentDidMount() {
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
