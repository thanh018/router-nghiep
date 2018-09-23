import React, { Component } from 'react';

class Description extends Component {
  render() {
    var {match} = this.props;
    console.log(match);
    var {group, id} = match.params;
    console.log(group,' ', id);
    return (
      <div>
        <h1 className="main-title">Description:</h1>
        
        <p>{group}</p>
        
      </div>
    );
  }
}

export default Description;
