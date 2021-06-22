import React, { Component } from 'react';
import './NewTodoSection.css'

class NewTodoSection extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
          <div className='new-todo-section'>
            {this.props.children}
          </div>
        );
    }
}

export default NewTodoSection