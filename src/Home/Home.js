import React from 'react';
import './Home.css';
import Button from './Button/Button';

class Home extends React.Component {

    render () {
        return (
            <section id="home">
        <div className="home-shadow">
            <div className="container home-container">
                <div className="home-text">
                    <h1>Nasza firma oferuje najwyższej jakości produkty.</h1>
                    <h2>Nie wierz nam na słowo- sprawdź</h2>
                    <Button></Button>
                </div>
            </div>
        </div>
    </section>
    );
  }
}
  
  export default Home;