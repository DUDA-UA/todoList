import React, { Component } from 'react';
import ItemStatusFilter from '../item-status-filter';

import './search-field.scss';

export default class SearchField extends Component{

  state = {
    term: ''
  }

  newValue = (e) =>{
    const term = e.target.value;
    this.setState({term});
    this.props.newValue(term);
  }

  render(){

    const{filter,onFilterChange} = this.props;

    return (
      <div className='search-field'>
        <input placeholder='filter field' className='search-input' value={this.state.term} onChange={this.newValue}/>
        <ItemStatusFilter filter={filter} onFilterChange={onFilterChange}/>
      </div>  
    );
  }
  }