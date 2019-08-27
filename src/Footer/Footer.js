import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {

    render () {
        return (
            <footer>
                <div className="container footer-container">
                    <h2>Nazwa firmy - wszelkie prawa zastrzeżone, 2019</h2>
                    <div className="icons">    
                        <a href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                        <a href="https://www.facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookSquare}/></a>
                    </div>
                </div>
            </footer>
            );
  }
}
  
  export default Footer;