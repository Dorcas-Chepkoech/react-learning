import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import MainPage from './components/MainPage';

function App() {
  return (
    <div>
      <Router>
        <Route path='/' component={MainPage}/>
      </Router>
      
    </div>
    
  );
}

export default App;
