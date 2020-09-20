import React from 'react';
import '@microsoft/mgt';
import { Login } from '@microsoft/mgt-react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HomePage from './components/HomePage';
import About from './components/AboutPage';
import CadreEntry from './components/CadreEntry';

export default function App() {
  return (
    <div className="App">
      <mgt-msal-provider client-id="e7101a24-cacb-4dfb-86f4-0c5a749da124" redirect-ui="http://localhost:3000"></mgt-msal-provider>
      <div className="App-header">
          <Router>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">
                <img src={logo} height="30" alt="" loading="lazy"/>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">
                    <Link to="/">Home</Link>
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <Link to="/about">About</Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Login loginCompleted={(e) => console.log('Logged in')}></Login>
            </Navbar>
            <div>
              {/*
                A <Switch> looks through all its children <Route>
                elements and renders the first one whose path
                matches the current URL. Use a <Switch> any time
                you have multiple routes, but you want only one
                of them to render at a time
              */}
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/cadres/:cadreId" component={CadreEntry}/>
              </Switch>
            </div>
          </Router>
      </div>
    </div>
  );
}