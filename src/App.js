import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Project from './components/Projects/Project';
import About from './components/About/About';
import Options from './components/Options/Options';
import Health from './components/Health/Health';
import { 
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';
import { 
  AppBar,
  CssBaseline
} from '@material-ui/core';
import HeaderNav from './components/HeaderNav';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <CssBaseline />
      <Router>
        <HeaderNav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Project />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/options">
            <Options />
          </Route>
          <Route path="/health">
            <Health />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
