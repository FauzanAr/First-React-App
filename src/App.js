import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React tester
          </p>
          <p className="App-intro">
            Filter
          </p>
          <input type="text" style={{marginBottom : 8}}/><br/>
          <button class="btn btn-primary">Saring</button>

          <div style = {{display:'flex', justifyContent:'center',textAlign:'left'}}>
            <ol>
              <li>Jawa Barat</li>
              <li>Jawa Tengah</li>
            </ol>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
