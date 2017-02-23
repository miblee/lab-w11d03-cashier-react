import React, { Component } from 'react';
import './App.css';


class Item extends Component {
  constructor(props){
    super();
    console.log(props)
    this.state = {
      item: props.item
    }
  }



  render(){
    return(
      <li>
        {this.state.item.desc} ... ${this.state.item.price} <button>➕</button>
      </li>
    )
  }
}


export default Item
