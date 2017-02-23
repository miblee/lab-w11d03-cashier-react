import React, { Component } from 'react';
import './App.css';


class Item extends Component {
  constructor(item){
    super();
    console.log(item)
  }

  render(){
    return(
      <div>Hi from item.js

      </div>
    )
  }
}


export default Item
