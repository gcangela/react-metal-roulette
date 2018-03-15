import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = []
  }

  render() {
    return (
      <div>
      <Header />

      </div>
    );
  }
}

export default App;
