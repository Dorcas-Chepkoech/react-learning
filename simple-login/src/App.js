import React from 'react';
import './App.css';

import LoginForm from './components/common/Login';

function App() {
  return (
    <div className="App">
     
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="login-wrapper">
        <LoginForm/>
        </div>
    </div>
  );
}

export default App;
