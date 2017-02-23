import React, { Component } from 'react';
import './App.css';
import ForSale from './forSale.js';
import Receipt from './receipt.js';

var items = [
      {category: "Meat & Poultry", sku: 1001, desc: "Rib-eye Steak", price: 12.95},
      {category: "Meat & Poultry", sku: 1023, desc: "Free-range Chicken", price: 6.95},
      {category: "Meat & Poultry", sku: 1045, desc: "Bacon", price: 3.79},
      {category: "Dairy", sku: 2005, desc: "American Cheese Slices", price: 5.59},
      {category: "Dairy", sku: 2012, desc: "Milk (Low-fat)", price: 1.99},
      {category: "Dairy", sku: 2014, desc: "Milk (Whole)", price: 2.29},
      {category: "Dairy", sku: 2034, desc: "Cream Cheese", price: 3.25},
      {category: "Produce", sku: 3002, desc: "Lettuce (Iceberg)", price: 1.25},
      {category: "Produce", sku: 3005, desc: "Lettuce (Romaine)", price: 2.39},
      {category: "Produce", sku: 3013, desc: "Tomato (Organic)", price: 0.99},
      {category: "Bread", sku: 4010, desc: "Loaf (White)", price: 1.99},
      {category: "Bread", sku: 4015, desc: "Loaf (Wheat)", price: 2.59},
      {category: "Bread", sku: 4021, desc: "Buns (Hotdog)", price: 1.75},
      {category: "Bread", sku: 4023, desc: "Buns (Hamburger)", price: 3.00}
    ];


class App extends Component {
  constructor(){
    super();
    this.state = {
      forSale: items
    }

    this.addToReceipt = this.addToReceipt.bind(this)
  }

  test(i){
    console.log("hello i=", i)
  }

  addToReceipt(i){
    console.log("i=", i)
    var newitems = this.state.forSale.slice()
    newitems.pop()
    // this.setState({
    //   forSale: this.remove(this.state.forSale, i)
    // })
    this.setState({
      forSale: newitems
    })

    console.log(this.state)
    console.log(newitems.length)
    this.render()
  }

  remove(arr, i){
    return arr.filter((el, index)=>{
      return index !== i
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.forSale.length}</div>
        <h1 className="header">the FUN register!<img className="App-logo" src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2/128/apple-circle-green-512.png" alt="logo"/></h1>
        <ForSale items={this.state.forSale} addToReceipt={this.addToReceipt} testerFunction={this.test} />
        <Receipt />
      </div>
    );
  }
}

export default App;
