import React from 'react';
import {Route, Link} from 'react-router-dom';
import TodoHome from './components/TodoComponents/TodoHome'; 
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const tasks = [
  {
    name: 'Do some Codewars challenges',
    id: 1,
    completed: false
  },
  {
    name: 'Study advanced react',
    id: 2,
    completed: false
  },
  {
    name: 'Take JavaScript refresher courses',
    id: 3,
    completed: false
  },
  {
    name: 'Start side projects',
    id: 4,
    completed: false
  },
  {
    name: 'Redisign my portfolio',
    id: 5,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

constructor() {
  super();
  this.state ={
    tasks
  };
}

toggleTodo = id => {
  console.log(id);

  this.setState({
    tasks: this.state.tasks.map(todo => {
      if(todo.id === id) {
        return{
          ...todo,
          completed: !todo.completed
      };
    } else {
      return todo;
      }
    })
  });
};

addTodo = todoName => {
  const newTodo = {
    name: todoName,
    id: Date.now(),
    completed: false
  };
  this.setState({
    tasks: [...this.state.tasks, newTodo]
  });
};

clearCompleted = () => {
  this.setState({
    tasks: this.state.tasks.filter(todo => !todo.completed)
  });
};

  render() {
    return (
      <div className="App">

        <Route exact path="/" component={TodoHome} />


        <Route exact path="/todo-list" render={(props) => 
        <TodoForm addTodo={this.addTodo}/> } />
        
        <Route exact path="/todo-list" render={(props) => 
        <TodoList tasks={this.state.tasks}
         toggleTodo={this.toggleTodo}
         clearCompleted={this.clearCompleted} /> } />
             
      </div>

    );
  }
}

export default App;
