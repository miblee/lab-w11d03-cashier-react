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
    const renderedItems = this.state.items.map( (item, i) =>
      <Item item={item} />
    )
    console.log(renderedItems)
    return(
      <div className="col">
        <h3 className="title">for sale</h3>
        <ul>
          {renderedItems}
        </ul>
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
