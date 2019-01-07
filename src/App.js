import React, { Component } from 'react';
import {connect} from 'react-redux';
import List from './containers/List'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        React-Redux template
      <List/>
      </div>
    );
  }
}

export default connect(null)(App);
