import React from 'react';
import './Nav.css';

class Nav extends React.Component {

    render () {
        return (
            <nav>
                <div className="container nav-container">
                    <a href="#">nazwa firmy</a>
                <div className="nav-bar-right">
                    <a href="#about">o nas</a>
                    <a href="#offer">oferta</a>
                    <a id="contact">kontakt</a>
                </div>
                <div className="nav-mobile">
                    <i className="fas fa-bars"></i>
                </div>
                </div>
            </nav>
    );
  }
}
  
  export default Nav;