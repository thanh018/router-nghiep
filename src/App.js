import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import NotFound from './components/NotFound';


const MenuLink = ({label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({match}) => {
        var active = match ? 'active' : '';
        return (
          <li className={`item ${active}`}>
            <Link to={to}>
              {label}
            </Link>
          </li>
        )
      }}
    />
  )
}
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <Switch>
            <Route path="/" exact component = {Home} />
            <Route path="/about" component = {About} />
            <Route component = {NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
