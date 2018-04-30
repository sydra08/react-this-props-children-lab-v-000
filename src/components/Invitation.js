// Code Invitation Component Here
import React from 'react';

export default class Invitation extends React.Component {
  render() {
    return(
      <div className="invitation">
        <h1>You've been invited!</h1>
        <div className="invitation-children">{this.props.children}</div>
      </div>
    );
  }
}
