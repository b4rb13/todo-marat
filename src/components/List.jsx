import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
          <div className='list-container'>
            <ul className='list'>
              {this.props.children}
            </ul>
          </div>
        );
    }
}

export default List;