import React, { Component } from 'react';
import './App.css';
import todoList from './todos.json';


class TodoItem extends Component {
  state = {
    checked: false
    }

  handleCheckClick = () =>{
    this.setState({
      checked: !this.state.checked
    })
  }
  render() { 
    return ( 
        <li>
          <div className={this.state.checked ? 'completed' : 'editing'}>
            <input className='toggle' type='checkbox' checked={this.state.checked} 
            onChange={this.handleCheckClick}/>
            <label>{this.props.text}</label>
            {/* <button className='destroy'></button> */}
          </div>
        </li>
     );
  }
}

class TodoList extends Component {
  state = { 
    todos: todoList
   }
  render() { 
    return ( 
      <div className='todoapp'>
        <header className='header'>
          <h1>todos</h1>
          <input className='new-todo' placeholder='What needs to be done' autoFocus/>
        </header>
        <section className='main'>
          <ul className='todo-list'>
            {this.state.todos.map(todo => <TodoItem text={todo.title} key={todo.id}/>)}
          </ul>
        </section>
      </div>
     );
  }
}


class App extends Component {
  render() {
    return (
        <TodoList/>
    );
  }
}

export default App;
