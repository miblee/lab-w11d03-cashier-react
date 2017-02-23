import React, { Component } from 'react';
import './App.css';


class Receipt extends Component {
  constructor() {
    super();
    this.state = {
      avail_produce: "hello"
    }
  }
  render() {
    return (
      <div className="col">
        <h3 className="title">receipt</h3>


      </div>
    );
  }
}

export default Receipt;
