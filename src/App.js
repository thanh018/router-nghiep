import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import routes from './routes';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <Switch>
            {this.showRoutes(routes)}
          </Switch>
        </div>
      </Router>
    );
  }
  showRoutes = (routes) => {
    var result = null;
    if(routes.length > 1) {
      result = routes.map((route, index)=>{
        return (
          <Route key={index} path={route.path} exact={route.exact} component = {route.main} />
        )
      });
    }
    return result;
  }
}

export default App;
