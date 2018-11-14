import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={require('../images/logo.png')} alt="logo" className="brand-logo" />
        <div className="menu">
            <button type="button" className="btn-menu">
              <img src={require('../images/menu.png')} alt="menu" className="icon-menu" />
            </button>
        </div>
      </header>
    );
  }
}

export default Header;
