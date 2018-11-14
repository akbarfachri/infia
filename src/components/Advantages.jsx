import React, { Component } from 'react';

class Advantages extends Component {
  render() {
    return (
      <div className="advantages">
          <div className="container">
              <div className="row">
                  <div className="col-6">
                      <div className="advantages-inner">
                          <img src={require('../images/image1.png')} alt="logo" className="img-advantages" />
                          <h4 className="title-advantages">Bekerja Dimana Saja</h4>
                          <p>Kalian tidak perlu bangun pagi, terjebak macet dijalan atau hambatan-hambatan lain yang biasa terjadi.</p>
                      </div>
                  </div>
                  <div className="col-6">
                      <div className="advantages-inner">
                          <img src={require('../images/image2.png')} alt="logo" className="img-advantages" />
                          <h4 className="title-advantages">Modal Tidak Besar</h4>
                          <p>Tidak butuh modal sampai belasan juta,
                          puluhan juta atau bahkan ratusan juta untuk menjadi seorang pengusaha sukses. Hanya dengan modal <b>Rp 1.500.000</b> kalian sudah
                          bisa menjadi pengusaha.</p>
                      </div>
                  </div>
                  <div className="col-6">
                      <div className="advantages-inner">
                          <img src={require('../images/image3.png')} alt="logo" className="img-advantages" />
                          <h4 className="title-advantages">Proses Bergabung Sangat Mudah</h4>
                          <p>Tidak membutuhkan biaya pendaftaran dan tidak perlu mengisi form pendaftaran, kalian cukup hubungi Customer Service kami dan melakukan transaksi.</p>
                      </div>
                  </div>
                  <div className="col-6">
                      <div className="advantages-inner">
                          <img src={require('../images/image4.png')} alt="logo" className="img-advantages" />
                          <h4 className="title-advantages">Jasa Titip Barang</h4>
                          <p>Kemudahan ini sangat cocok bagi kalian yang sibuk dan tidak memiliki tempat penyimpanan barang yang memadai. Tim Infia Market bersedia mengemas barang kamu dan mengirimkannya.</p>
                      </div>
                  </div>
                  <div className="col-6">
                      <div className="advantages-inner">
                          <img src={require('../images/image5.png')} alt="logo" className="img-advantages" />
                          <h4 className="title-advantages">Viral product</h4>
                          <p>Produk-produk yang dijual Infia Market adalah produk-produk terpilih dan viral.</p>
                      </div>
                  </div>
                  <div className="col-6">
                      <div className="advantages-inner">
                          <img src={require('../images/image6.png')} alt="logo" className="img-advantages" />
                          <h4 className="title-advantages">Harga Kompetitif</h4>
                          <p>Margin keuntungan yang diberikan Infia Market sangat menguntungkan.</p>
                      </div>
                  </div>
                  <div className="col-6">
                      <div className="advantages-inner">
                          <img src={require('../images/image7.png')} alt="logo" className="img-advantages" />
                          <h4 className="title-advantages">Money Back Guarantee</h4>
                          <p>Kalian tidak perlu takut jika barang yang kalian jual tidak laku. Infia Market bersedia membeli kembali barang tersebut, sehingga yang kalian nikmati hanya keuntungan dan uang kalian tidak akan hilang.</p>
                      </div>
                  </div>
                  <div className="col-6">
                      <div className="advantages-inner">
                          <img src={require('../images/image8.png')} alt="logo" className="img-advantages" />
                          <h4 className="title-advantages">Consultasi 24 Jam</h4>
                          <p>Kalian tidak perlu takut jika barang yang kalian jual tidak laku. Infia Market bersedia membeli kembali barang tersebut, sehingga yang kalian nikmati hanya keuntungan dan uang kalian tidak akan hilang.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Advantages;
