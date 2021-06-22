import React, { Component } from 'react';

class DoneCheckbox extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
          <div className='done-checkbox-container'>
            <input checked={this.props.checked} onChange={this.props.onChange} className='done-checkbox' type='checkbox' />
          </div>
        );
    }
}

export default DoneCheckbox;