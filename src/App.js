import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CompanyManagementConsole } from './components/company-management-console/company-management-console.component';

class App extends Component {
  render() {
    return (
      <div>
        <CompanyManagementConsole/>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <div>
      //     <h1>You are in main component</h1>
      //   </div>
      // </div>
    );
  }
}

export default App;
