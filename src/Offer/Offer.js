import React from 'react';
import './Offer.css';
import Box from './Box/Box';

class Offer extends React.Component {
    constructor(props) {
        super(props);

        this.offers = [
            {
                name: "Usługa 1",
                isNew: true
            },
            {
                name: "Usługa 2",
                isNew: true
            },
            {
                name: "Usługa 3",
                isNew: true
            },
            {
                name: "Usługa 4",
                isNew: false
            },
            {
                name: "Usługa 5",
                isNew: false
            },
            {
                name: "Usługa 6",
                isNew: false
            }
        ]
    }
    render () {
        return (
            <section id="offer">
                <div className="container">
                    <h1>Czy się zajmuje nasza firma?</h1>
                        <div className="box-container">
                            {this.offers.map(o => <Box box={o}></Box> )}                     
                        </div>
                </div>
            </section>
    );
  }
}
  
  export default Offer;