import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import New from './new';
import Profile from './profile';

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
      <div>


        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route  path="/new" component={New} />
        <Route path="/users/:name" component={Profile} />
      </div>
    </Router>
    );
  }
}

export default App;
