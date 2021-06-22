import React, { Component } from 'react';
import Button from './Button'
import './NewTodoForm.css'
import PriorityInput from './PriorityInput';


class NewTodoForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
          <form  
            className='new-todo-form'
            onSubmit={this.props.onSubmit}
          >
            
            <input 
              className='new-todo-input' 
              placeholder='What do you have to do?' 
              type='text'
              onFocus={this.props.onFocus}
              ref={this.props.todoTitleRef}
            />
            <Button 
              className='new-todo-button'
              submitButtonRef={this.props.submitButtonRef}
            > 
               Add
            </Button>
            
            <PriorityInput 
              priorityRef={this.props.priorityRef}
            />
          </form>
        );
    }
}

export default NewTodoForm