import React, { Component } from 'react'

import './footer-btn.scss'

export default class FooterBtn extends Component{

    state={
        label:'',
    }

    onLabelChange = (e) =>{
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) =>{
    e.preventDefault();
    const lb = this.state.label;
    if(lb.length === 0){
        return false
    }
    else{
        this.props.addItem(lb);
        this.setState({
            label: ''
        })
    }
    }

    render(){
        return(
            <form className='footer-btn d-flex' onSubmit={this.onSubmit}>
                <button className='btn btn-info btn-outline-warning footer-btn-item'>Enter</button>
                <input type='text' placeholder='new task' className='form-control footer-input' onChange={this.onLabelChange} value={this.state.label}/>
            </form>
        )
    }
}