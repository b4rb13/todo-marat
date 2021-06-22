import React, { Component } from 'react';
import './NoItems.css'

class NoItems extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
          <div className='no-items-container'>
              <p>No todos to show</p>
          </div>
        );
    }
}

export default NoItems;