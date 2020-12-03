import React from 'react';
import {Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Link className="nav-link" role="button" to="/">Home</Link>
              <Link className="nav-link" role="button" to="/users">Users</Link>
              <Link className="nav-link" role="button" to="/about">About</Link>
            </Nav>
        </Navbar>
        <Switch>          
          <Route path="/users" component={Users}></Route>      
          <Route path="/about" component={About}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>          
    </div>
  );
}

export default App;
