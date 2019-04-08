import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './UserList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           React Userlist App
          </p>
        </header>
        <UserList />
      </div>
    );
  }
}

export default App;
