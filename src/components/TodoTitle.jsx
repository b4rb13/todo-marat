import React, { Component } from 'react';

class TodoTitle extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
          <h1 className='todo-title'>
            {this.props.children}   
          </h1>
        );
    }
}

export default TodoTitle;