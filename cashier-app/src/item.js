// import React, { Component } from 'react';
// import './App.css';


// class Item extends Component {
//   constructor(props){
//     super();
//     this.state = {
//       item: props.item,
//       id: props.id,
//       test: props.testerFunction,
//       addToReceipt: props.addToReceipt
//     }
//   }



//   render(){
//     return(
//       <li>
//         {this.state.item.desc} ... ${this.state.item.price}
//         <button onClick={()=> this.state.addToReceipt(this.state.id)} >➕ </button>
//       </li>
//     )
//   }
// }



import React from 'react';


const Item = function(props) {
  return(
    <li>
      {props.item.desc} ... ${props.item.price}
      <button onClick={()=> props.addToReceipt(props.id)} >➕ </button>
    </li>
  )
}

export default Item
