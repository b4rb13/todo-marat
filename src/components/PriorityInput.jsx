import React, { Component } from 'react';
import './PriorityInput.css'

class PriorityInput extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
          <div className='priority-input-section'>
            <input ref={this.props.priorityRef} type='checkbox' id='priority' className='priority-input' />
            <label htmlFor='priority'> High Priority</label>
          </div>
        );
    }
}

export default PriorityInput