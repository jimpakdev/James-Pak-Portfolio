import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import './App.css';

function App() {

  return (
    <Router>
      <div>
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;
