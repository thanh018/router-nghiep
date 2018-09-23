import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component {

  state={
    username: '',
    password: ''
  };

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ?  target.checked : target.value;
    this.setState({
        [name]: value
    })
  }

  onLogin = (e) => {

    e.preventDefault();
    var { username, password }=this.state;
    if(username==='admin' && password==='admin') {
      localStorage.setItem('user', JSON.stringify({
        username: username,
        password: password
      }));
    }

  }


  render() {
    var { username, password }=this.state;
    var loginUser = localStorage.getItem('user');

    if(loginUser !== null) {
      var {location} = this.props;
      console.log(location);
      return <Redirect to={
        {
          pathname: 'product',
          state: {
            from: location
          }
        }
      } />
    }
    
    


    return (
      <div>
        <h1 className="main-title">HOME</h1>

        <form onSubmit={this.onLogin}>

          <p>
            <input 
              size="30"
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={this.onChange}
            />
          </p>

          <p>
            <input 
              size="30"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.onChange}
            />
          </p>
          
          <p><button>Submit</button></p>
        </form>
      </div>
    );
  }
}

export default Login;
