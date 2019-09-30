import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const tasks = [
  {
    name: 'Do some CodeWars challenges',
    id: 1,
    completed: false
  },
  {
    name: 'Study Advanced React',
    id: 2,
    completed: false
  },
  {
    name: 'Take JavaScript refresher course',
    id: 3,
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
          <div>
            <h2>Welcome to your Todo App!</h2>
            <TodoForm addTodo={this.addTodo} />
          </div>
            <TodoList
            tasks={this.state.tasks}
            toggleTodo={this.toggleTodo}
            clearCompleted={this.clearCompleted}
            />
          </div>

    );
  }
}

export default App;
