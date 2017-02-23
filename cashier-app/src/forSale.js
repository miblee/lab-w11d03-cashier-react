import React, { Component } from 'react';
import './App.css';
import Item from './item.js'

class ForSale extends Component {
  constructor(props){
    console.log(props)
    super();
    this.state = {
      items: props.items
    }
  }
  render(){
    return(
      <div className="col">
        <h3 className="title">for sale</h3>
        <Item item={this.state.items[0]} />
      </div>
    );
  }
}

export default ForSale;


// import React, { Component } from 'react';
// import './App.css';

// const ForSale = ({items}) => {
// console.log({items})
//   return(
//     <div className="col">
//       <h3 className="title">for sale</h3>
//     </div>
//   );
// }

// export default ForSale;
