import React from 'react';
import './App.css';
import {HashRouter as Router}  from 'react-router-dom'
import Header from './Components/Header/Header'
import routes from './routes'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {routes}
      </Router>
    </div>
  );
}

export default App;
