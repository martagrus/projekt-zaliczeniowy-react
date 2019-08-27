import React from 'react';
import './About.css';
import Employee from './Employee/Employee';

class About extends React.Component {
    constructor(props) {
        super(props);

        this.employees = [
            {
                name: 'Captain Marvel',
                pic: "http://bit.ly/2RfoKV5"
            },
            {
                name: 'Wonder Woman',
                pic: "http://bit.ly/31ucJjk"
            },
            {
                name: 'Iron Man',
                pic: "http://bit.ly/2ZtblQ1"
            },
            {
                name: 'Thor',
                pic: "http://bit.ly/2HvYaDM"
            }
        ]
    }
    render () {
        return (
            <section id="about">
        <div className="container about-container">
            <h1>Nasi specjaliści</h1>
                {this.employees.map((emp, i) => {
                    return <Employee employee={emp} key={i}></Employee>
                })}
        </div>
    </section>
    );
  }
}
  
  export default About;