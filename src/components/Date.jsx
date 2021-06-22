import React, { Component } from 'react';


class Date extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
          <div className='date-section'>           
                <span className='created-text'>Added: </span>
                <span className='date'>{this.props.date}</span>           
          </div>
        );
    }
}

export default Date;