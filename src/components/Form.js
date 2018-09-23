import React, { Component } from 'react';
import {Prompt} from "react-router-dom";


class Form extends Component {
  state={
    isBlocking: false
  };
  render() {
    const {isBlocking}=this.state;
    return (
      <div>
        <h1 className="main-title">FORM</h1>
        <form
          onSubmit={
            e=>{
              e.preventDefault();
              e.target.reset();
              this.setState({
                isBlocking: false
              })
            }
          }
        >
          <Prompt
            when={isBlocking}
            message={location=>
              `Are you sure want to go do ${location.pathname}`
            }
          />
          <p></p>
          <p>
            <input 
              size="30"
              placeholder="Enter something"
              onChange={e=>{
                this.setState({
                  isBlocking: e.target.value.length > 0
                })
              }
                
              }
            />
          </p>
          <p><button>Submit</button></p>

        </form>
      </div>
    );
  }
}

export default Form;
