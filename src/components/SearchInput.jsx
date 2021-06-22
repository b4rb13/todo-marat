import React, { Component } from 'react';
import './SearchInput.css'

class SearchInput extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
          <div className='search-input-container'>
            <input
              ref={this.props.searchInputRef} 
              className='search-input' 
              type='text' 
              placeholder='Search'
              onChange={this.props.onChange}
            /> 
          </div>
        );
    }
}

export default SearchInput;