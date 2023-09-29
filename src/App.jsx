// import { useState } from 'react'
// import React from 'react'
// import { ReactDOM } from 'react'

// import Navbar from './Navbar';
 

// import './App.css'

// function App() {

//   return (
//     < div className="App">
//       <Navbar/>
      {/* rest of my application here*/}
    {/* </div>
  );
}

export default App */}
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/' exact/>
      </Switch>
    </Router>
    </>
  )
}