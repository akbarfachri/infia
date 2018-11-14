import React, { Component } from 'react';
// import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Banner from './components/Banner';
import Info from './components/Info';
import Advantages from './components/Advantages';
import Product from './components/Product';
import Partner from './components/Partner';
import Article from './components/Article';
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="app-wrapper">
            <div className="banner-wrapper">
              <Header />
              <Banner />
            </div>  
            <Info />
            <Advantages />
            <Product />
            <Partner />
            <Article />
            <Footer />
          </div>
      </div>
    );
  }
}

export default App;
