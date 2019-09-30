import React from 'react';

class Box extends React.Component {

    displayNewText () {
        if(this.props.box.isNew) return <span>(nowość)</span>
    }

    displayNewDot () {
        if(this.props.box.isNew) return <div className="box-new"></div>
    }

    render () {
        return (
                <div className="box">
                    <div className="box-content">{this.props.box.name}
                    {this.displayNewText()}
                    </div>
                    {this.displayNewDot()}  
                </div>                                 
    );
  }
}
  
  export default Box;