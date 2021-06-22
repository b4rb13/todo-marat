import React, { Component } from 'react';


class Priority extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
          <p className='priority'>
            Priority: {this.props.priorityLevel}
          </p>
        );
    }
}

export default Priority;