import React, { Component } from 'react';
import DoneCheckbox from './DoneCheckbox';
import Priority from './Priority';
import TodoTitle from './TodoTitle';
import Date from './Date';
import Button from './Button'
import './ListItem.css'

class ListItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
          <li className='list-item' style={{
            borderBottom: this.props.priorityLevel === 'Low' ? '3px solid rgb(172, 194, 173)' : '3px solid  #973838'
          }}>
            <DoneCheckbox 
              onChange={this.props.onDoneChange}
              checked={this.props.checked}
            />
            <div className='info-section'>
              <TodoTitle>{this.props.todoTitle}</TodoTitle>
              <Priority 
                priorityLevel={this.props.priorityLevel}
              />
            </div>
            <Date 
              date={this.props.date}
            />
            <Button 
              className='delete-button'
              onClick={this.props.onDeleteHandler}
            >
                &#215;
            </Button>
          </li>
        );
    }
}

export default ListItem;