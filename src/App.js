import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Routing from './Routing';
import logo from '../src/logo1.png';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        
          <div className="header">

              <div className="App-logo">
                  <img alt="app icon" width="80" src={logo} />
              </div>

              <div className="siteName">
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
              <h1>TVMAZE SHOWS</h1>
                  </Link>
              </div>
          </div>

        <Routing />
      </div>
    );
  }
  
}

export default App;
