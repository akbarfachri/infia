import React, { Component } from 'react';

class Info extends Component {
  render() {
    return (
      <div className="info">
          <div className="container">
            <div className="row mb-7em">
              <div className="col-6">
                  <div className="info-inner pr-5em">
                    <h2 className="title-section">Tentang Kami</h2>
                    <div className="line"></div>
                    <h4 className="subtitle-info">Infia Market adalah sebuah distributor produk online.</h4>
                    <p className="paragraph-info">Infia Market tergabung dalam jaringan Infia Mega Semesta. Hal yang membedakan Infia Market dengan distributor online lain adalah Infia Market menerapkan konsep Media Commerce.</p>
                  </div>
              </div>
              <div className="col-6">
                  <img src={require('../images/commerse-1.png')} alt="logo" className="info-ill img-100" />
              </div>
            </div>  
            <div className="row">
              <div className="col-6">
                  <img src={require('../images/commerse-2.png')} alt="logo" className="info-ill img-100" />
              </div>
              <div className="col-6">
                  <div className="info-inner pl-5em">
                    <h2 className="title-section">Apa yang kami kerjakan</h2>
                    <div className="line"></div>
                    <h4 className="subtitle-info">Konsep Media Commerce masih terbilang baru di Indonesia. Media Commerce adalah konsep berdagang dengan menggunakan media sendiri untuk meminimalisir biaya marketing.</h4>
                    <p className="paragraph-info">Infia Market didukung oleh jaringan Infia di instagram dengan jumlah followers mencapai 27 juta di seluruh Indonesia dengan 1 Miliar
                    impression setiap bulan. Infia Market juga memiliki 1.000 jaringan
                    reseller yang tersebar di seluruh Indonesia. Penjualan produk Infia Market menyentuh angka 6.000 pcs per hari yang dikirim
                    ke suluruh Indonesia.</p>
                  </div>  
              </div>
            </div>  
          </div>  
      </div>
    );
  }
}

export default Info;
