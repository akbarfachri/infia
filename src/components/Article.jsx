import React, { Component } from 'react';

class Article extends Component {
  render() {
    return (
      <div className="article">
      		<div className="container">
      			<div className="article-inner">
      				<div className="title-wrapper">
		      			<h2 className="title-section">Artikel</h2>
		                <div className="line"></div>
	            	</div>    
                	<a href="/" className="right-link">Lihat Artikel Lainnya <i className="fa fa-chevron-right"></i> </a>
      			</div>
      		</div>	
      		<div className="container-fluid">
      			<div className="article-box">
	            	<div className="row">
	            		<div className="col-3">
	            			<div className="article-item">
	            				<img src={require('../images/article-image1.png')} alt="logo" className="img-partner img-100" />
	            				<a href="/">
	            					<h4>Temporibus autem qui busdam et aut officiis debitis optideleniti atque.</h4>
	            				</a>	
	            				<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui
									blanditiis prae sentium voluptatum deleniti atque corrupti quos dolores.</p>
								<a href="/" className="btn btn-outline btn-small black uppercase mt-1-5em"><strong>Baca Lebih Lanjut <i className="fa fa-chevron-right"></i> </strong></a>	
	            			</div>
	            		</div>
	            		<div className="col-3">
	            			<div className="article-item">
	            				<img src={require('../images/article-image2.png')} alt="logo" className="img-partner img-100" />
	            				<a href="/">
	            					<h4>Temporibus autem qui busdam et aut officiis debitis optideleniti atque.</h4>
	            				</a>	
	            				<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui
									blanditiis prae sentium voluptatum deleniti atque corrupti quos dolores.</p>
								<a href="/" className="btn btn-outline btn-small black uppercase mt-1-5em"><strong>Baca Lebih Lanjut <i className="fa fa-chevron-right"></i> </strong></a>	
	            			</div>
	            		</div>
	            		<div className="col-3">
	            			<div className="article-item">
	            				<img src={require('../images/article-image3.png')} alt="logo" className="img-partner img-100" />
	            				<a href="/">
	            					<h4>Temporibus autem qui busdam et aut officiis debitis optideleniti atque.</h4>
	            				</a>	
	            				<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui
									blanditiis prae sentium voluptatum deleniti atque corrupti quos dolores.</p>
								<a href="/" className="btn btn-outline btn-small black uppercase mt-1-5em"><strong>Baca Lebih Lanjut <i className="fa fa-chevron-right"></i> </strong></a>
	            			</div>
	            		</div>
	            		<div className="col-3">
	            			<div className="article-item">
	            				<img src={require('../images/article-image4.png')} alt="logo" className="img-partner img-100" />
	            				<a href="/">
	            					<h4>Temporibus autem qui busdam et aut officiis debitis optideleniti atque.</h4>
	            				</a>	
	            				<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui
									blanditiis prae sentium voluptatum deleniti atque corrupti quos dolores.</p>
								<a href="/" className="btn btn-outline btn-small black uppercase mt-1-5em"><strong>Baca Lebih Lanjut <i className="fa fa-chevron-right"></i> </strong></a>	
	            			</div>
	            		</div>
	            	</div>
	            </div>
      		</div>
      </div>
    );
  }
}

export default Article;
