import React, { Component } from 'react';
import Section from './components/section/Section';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Section background="red"/>
        <Section background="blue"/>
      </div>
      
    );
  }
}

export default App;
