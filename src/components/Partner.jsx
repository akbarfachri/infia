import React, { Component } from 'react';

class Partner extends Component {
  render() {
    return (
      <div className="partner bg-grey">
          <div className="container">
              <h3 className="uppercase text-grey">Produk Kami Tersedia Di</h3>
              <div className="logo-partner">
                  <div className="row">
                      <div className="col-2">
                          <div className="logo-wrapper">
                              <img src={require('../images/ralali.png')} alt="logo" className="img-partner" />
                          </div>    
                      </div>
                      <div className="col-2">
                          <div className="logo-wrapper">
                              <img src={require('../images/bukalapak.png')} alt="logo" className="img-partner" />
                          </div>
                      </div>
                      <div className="col-2">
                          <div className="logo-wrapper">
                              <img src={require('../images/jdid.png')} alt="logo" className="img-partner" />
                          </div>
                      </div>
                      <div className="col-2">
                          <div className="logo-wrapper">
                              <img src={require('../images/tokopedia.png')} alt="logo" className="img-partner" />
                          </div>
                      </div>
                      <div className="col-2">
                          <div className="logo-wrapper">
                              <img src={require('../images/blibli.png')} alt="logo" className="img-partner" />
                          </div>
                      </div>
                      <div className="col-2">
                          <div className="logo-wrapper">
                              <img src={require('../images/elevenia.png')} alt="logo" className="img-partner" />
                          </div>
                      </div>
                    </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Partner;
