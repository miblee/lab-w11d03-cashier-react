import React, { Component } from 'react';
import './App.css';
import Item from './item.js'

// class ForSale extends Component {
//   constructor(props){
//     super();
//     this.state = {
//       items: props.items,
//       test: props.testerFunction,
//       addToReceipt: props.addToReceipt
//     }
//   }
//   render(){
//     const renderedItems = this.state.items.map( (item, i) =>
//       <Item key={i} id={i} item={item} addToReceipt={this.state.addToReceipt} testerFunction={this.state.test} />
//     )
//     return(
//       <div className="col">
//         <h3 className="title">for sale</h3>
//         <ul>
//           {renderedItems}
//         </ul>
//       </div>
//     );
//   }
// }

// export default ForSale;


// import React, { Component } from 'react';
// import './App.css';

const ForSale = (props) => {
  const renderedItems = props.items.map( (item, i) =>
      <Item key={i} id={i} item={item} addToReceipt={props.addToReceipt} testerFunction={props.test} />
    )
  return(
    <div className="col">
      <h3 className="title">for sale</h3>
      <ul>
        {renderedItems}
      </ul>
    </div>
  );
}

export default ForSale;
