import React from 'react';
import './App.css';
// import {Provider} from 'react-redux'
import {HashRouter as Router}  from 'react-router-dom'
import Header from './Components/Header/Header'
import routes from './routes'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          {/* <Provider> */}
            {routes}
          {/* </Provider> */}
      </Router>
    </div>
  );
}

export default App;
