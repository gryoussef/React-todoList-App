import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle=()=>{
       
            return{
                borderBottom:'1px #fff solid',
                padding:'10px',
                backgroundColor:'lightblue',
                textDecoration:this.props.todo.completed?'line-through':'none'
            }
        
    }

    render() {
        const{title,id,completed}=this.props.todo;
        return (
            <div style={this.getStyle()}>
               
               <p>
                   <input type='checkbox' onChange={this.props.markComplete.bind(this,id)} checked={completed}></input>
                   {title}
                   <button style={buttonStyle} onClick={this.props.delTodo.bind(this,id)}>X</button>
                </p>
              
            </div>
        )
    }
}
const buttonStyle={
    backgroundColor:'red',
    borderRadius:'50%',
    color:'#fff',
    border:'none',
    padding:'2px',
    float:'right',
}
TodoItem.propTypes={
    todo:PropTypes.object.isRequired
}

export default TodoItem
