import React ,{Component} from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import About from './components/pages/About';
import axios from 'axios';
import {BrowserRouter as Router,Route} from 'react-router-dom';
class App extends Component{
  state={
    todos:[
     
    ]
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=15').then(res=>this.setState({
      todos:res.data
    }))
  }
  markComplete=(id)=>{
    this.setState({todos:this.state.todos.map((todo)=>{
      if(todo.id===id){
        todo.completed=!todo.completed;
      }
      return todo;
    })})
  }
  deleteTodo=(id)=>{
    this.setState({todos:[...this.state.todos.filter((todo)=>
todo.id!==id
    )]

    })
  }
  addTodo=(title)=>{
    const newTodo={
      id:uuid.v4(),
      title:title,
      completed:'false'
    }
    this.setState({todos:[...this.state.todos,newTodo]});
  }
  render(){
    return (
      <Router>
      <div className="App">
        <Header></Header>
        <Route exact path='/' render={props=>(
          <React.Fragment>
          <AddTodo addTodo={this.addTodo}></AddTodo>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.deleteTodo}></Todos>
          </React.Fragment>
        )}>

        </Route>
        <Route path='/about' component={About}></Route>
      </div>
      </Router>
    );
  }
}


export default App;
