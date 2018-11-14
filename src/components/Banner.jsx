import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-6">
                  <div className="row">
                      <img src={require('../images/image-vector.png')} alt="logo" className="banner-vector" />
                      <div className="title-banner-wrapper">
                          <h1 className="title-banner title-lg text-white">Indonesia <br /> Viral Market</h1>
                          <a href="/" className="btn btn-outline white uppercase">Pelajari lebih lanjut <i className="fa fa-chevron-right"></i> </a>
                      </div>    
                  </div>
              </div>
              <div className="col-6">
                  <img src={require('../images/banner-illustration.png')} alt="logo" className="banner-ill img-100" />
              </div>
            </div>  
            <div className="square bg-yellow"></div>
          </div>  
      </div>
    );
  }
}

export default Banner;
