import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer bg-blue-light">
	        <div className="container">
	        	<div className="footer-wrapper">
	        		<div className="footer-item">
	        			<a href="/">
		          			<img src={require('../images/logo.png')} alt="logo" className="img-logo" />
		          		</a>	
		          	</div>	
		          	<div className="footer-item">
		          		<h4 className="uppercase">Indonesia Viral Products</h4>
		          		<span>Contact us on Line@: @infia_market (use @).</span>
		          		<span>Info reseller hubungi: 0817-276-919 / 0859-2005-7541</span>
		          	</div>	
		          	<div className="footer-item">
		          		<h4 className="uppercase">Follow Us On</h4>
		          		<ul>
		          			<li>
		          				<a href="/">
		          					<img src={require('../images/instagram.png')} alt="logo" className="" />
		          				</a>	
		          			</li>
		          			<li>
		          				<a href="/">
		          					<img src={require('../images/facebook.png')} alt="logo" className="" />
		          				</a>	
		          			</li>
		          			<li>
		          				<a href="/">
		          					<img src={require('../images/twitter.png')} alt="logo" className="" />
		          				</a>	
		          			</li>
		          		</ul>
		          	</div>
	        	</div>
	        </div>
	        <div className="square-blue"></div>	
      </footer>
    );
  }
}

export default Footer;
