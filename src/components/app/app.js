import React, { Component } from 'react';

import AppHeader from '../app-header';
import FooterBtn from '../footer-btn';
import SearchField from '../search-field';
import TodoList from '../todo-list';

import './app.scss'

export default class App extends Component{

maxId = 100;

  state = {
    todoData :[
      this.createTodoItem('Drink nice cofee'),
      this.createTodoItem('Make awesome app'),
      this.createTodoItem('Be front-end developer'),
    ],
    term: '',
    filter: 'all'
  }

  createTodoItem(label){
    return{
      label,
      important: false,
      done:false,
      id: this.maxId++
    }
  }

  deleteItem = (id) =>{
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx+1);

      let newArray = [...before, ...after];
      return{
        todoData: newArray
      }
    })
  }

  addItem = (text) =>{
    const newItem = this.createTodoItem(text);

    this.setState(({todoData})=>{
      let newArr = [
        ...todoData,
        newItem
      ];
      return{
        todoData: newArr
      }
    })
  }

  toogleProperty(arr,id,propName){
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx+1)
    ];
  }

  onToogleDone = (id) =>{
    this.setState(({todoData})=>{
      return{
        todoData: this.toogleProperty(todoData,id,'done')
      }
    })
  }

  onToogleImportant = (id) =>{
    this.setState(({todoData})=>{
      return{
        todoData: this.toogleProperty(todoData,id,'important')
      }
    })
  }

  search(items,term){
    if(term.length === 0){
      return items;
    }
    return items.filter((item) =>{
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }

filter(items, filter){
    switch(filter){
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  newValue = (term) =>{
    this.setState({term});
  }

  onFilterChange = (filter) =>{
    this.setState({filter});
  }

  render(){

    const {todoData,term,filter} = this.state;
    const visibleItems = this.filter(this.search(todoData,term),filter); 

      const doneCount = todoData.filter((el) => el.done).length;
      const todoCount = todoData.filter((el) => !el.done).length;
      const impItem = todoData.filter((el) => el.important).length;

    return(
      <div className='box'>
        <AppHeader todo={todoCount} done={doneCount} imp={impItem}/>
        <SearchField newValue={this.newValue} filter={filter} onFilterChange={this.onFilterChange}/>
        <TodoList todos={visibleItems} onDeleted={this.deleteItem} onToogleDone={this.onToogleDone} onToogleImportant={this.onToogleImportant}/>
        <FooterBtn addItem={this.addItem} />
      </div>
    )
  }
}