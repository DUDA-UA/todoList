import React, {Component} from 'react';

import './todo-list-item.scss';

export default class TodoListItem extends Component{

    render(){

        const {label,onDeleted,onDone,onImportant,done,important} = this.props;

        let classNames = 'todo-list-item';
        let classBox = 'todo-item-box';

        if(done){
            classNames += ' done';
        }

        if(important){
            classNames += ' important';
        }

        return(
            <div className={classBox}>
                <span className={classNames} onClick={onDone}>
                    <span className='todo-label' onClick={this.onLabelClick}>{label}</span>
                </span>
                <div className="todo-icon">
                    <button className='btn btn-outline-danger btn-sm' onClick={onDeleted}>
                        <i className="fas fa-trash-alt"></i>
                    </button>
                    <button className='btn btn-outline-success btn-sm' onClick={onImportant}>
                        <i className="fas fa-exclamation"></i>
                    </button>
                </div>
            </div>
        )
    }
}