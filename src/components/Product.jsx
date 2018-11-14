import React, { Component } from 'react';
import Slider from "react-slick";

class Product extends Component {
  render() {

    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      arrows: false
    };

    return (
      <div className="product">
          <div className="space-box bg-blue-light"></div>
          <div className="container">
              <div className="slider-wrapper">
                  <h2 className="title-section">Produk Unggulan</h2>
                  <div className="line"></div>
                  <div className="slider">
                      <Slider {...settings}>
                          <div className="slick-item">
                            <a href="/">
                                <img src={require('../images/product-2.png')} alt="logo" className="Info-ill img-100" />
                                <h5>Gentle Fever</h5>
                            </a>    
                          </div>
                          <div className="slick-item">
                            <a href="/">
                                <img src={require('../images/product-1.png')} alt="logo" className="Info-ill img-100" />
                                <h5>Wakdoyok</h5>
                            </a>    
                          </div>
                          <div className="slick-item">
                            <a href="/">
                                <img src={require('../images/product-3.png')} alt="logo" className="Info-ill img-100" />
                                <h5>Purinoir</h5>
                            </a>    
                          </div>
                          <div className="slick-item">
                            <a href="/">
                                <img src={require('../images/product-1.png')} alt="logo" className="Info-ill img-100" />
                                <h5>Wakdoyok</h5>
                            </a>    
                          </div>
                          <div className="slick-item">
                            <a href="/">
                                <img src={require('../images/product-3.png')} alt="logo" className="Info-ill img-100" />
                                <h5>Purinoir</h5>
                            </a>    
                          </div>
                        </Slider>
                  </div>
              </div>
          </div>    
      </div>
    );
  }
}

export default Product;
