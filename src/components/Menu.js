import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
  {
    to: '/',
    label: 'Home',
    exact: true
  },
  {
    to: '/about',
    label: 'About',
    exact: false
  },
  {
    to: '/form',
    label: 'Form',
    exact: false
  },
  {
    to: '/product',
    label: 'Product',
    exact: false
  },
  {
    to: '/login',
    label: 'Login',
    exact: false
  }
]

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
          {this.showMenu(menus)}
        </ul>
      </nav>
    );
  }

  showMenu = (menus) => {
    var result = null;
    if(menus.length > 0) {
      result = menus.map((menu, index)=>{
        return (
          <MenuLink key={index} label={menu.label} to = {menu.to} activeOnlyWhenExact={menu.exact}/>        
        )
      });
    }
    return result;
  }
}

export default Menu;
