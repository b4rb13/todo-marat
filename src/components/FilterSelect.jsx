import React, { Component } from 'react';


class FilterSelect extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
          <div className='filter-select-container'>
            <span className='filter-text'>Filter: </span>
            <select className='filter-select' onChange={this.props.onChange}>
                <option>All</option>
                <option>High Priority</option>
                <option>Low Priority</option>
                <option>Done</option>
            </select>
          </div>
        );
    }
}

export default FilterSelect