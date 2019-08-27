import React from 'react';
import './Employee.css';

class Employee extends React.Component {

    render () {
        return (
            <div className="employee">
                <img className="employee-pic" src={this.props.employee.pic} alt="Employee pisture"></img>
                <div>
                    <h3>{this.props.employee.name}</h3>
                    Cupcake ipsum dolor sit amet chocolate cake chocolate bar tootsie roll. Icing jelly-o donut croissant cake cookie donut dragée. Sweet roll liquorice danish chocolate bar cookie brownie chocolate gingerbread jelly-o. Icing chocolate jelly-o jelly-o danish. Cake cupcake jelly candy. Tootsie roll halvah carrot cake muffin caramels apple pie. 
                </div>
            </div>
            );
  }
}
  
  export default Employee;