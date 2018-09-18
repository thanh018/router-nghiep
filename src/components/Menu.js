import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

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

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">
          <MenuLink label="Home" to ="/" activeOnlyWhenExact={true}/>
          <MenuLink label="About" to ="/about" />
        </ul>
      </nav>
    );
  }
}

export default Menu;
