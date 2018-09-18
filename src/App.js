import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EmpDetail from './empDetail.jsx';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Employee Detail Application</h1>
        </header>
        <span>ytyu tytryurtir hgghy</span>
          
          <EmpDetail />
        
      </div>
    );
  }
}

export default App;
