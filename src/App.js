import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
