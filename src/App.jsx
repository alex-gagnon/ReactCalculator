import React, {Component} from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends Component {
  render() {
    return (
      <div id="container">
        <Calculator />
      </div>
    )
  }
}

export default App