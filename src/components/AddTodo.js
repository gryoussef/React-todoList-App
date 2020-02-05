import React, { Component } from 'react'

export class AddTodo extends Component {
    state={
        title:''
    }
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
    }
    render() {
        return (
            <div>
                <form  onSubmit={this.onSubmit} style={{display:'flex'}} >
                <input type='text' style={{flex:0.8,padding:'5px'}} name='title' placeholder='add a new task...'
                value={this.state.title} onChange={this.onChange}
                ></input>
                <input type="submit" style={{flex:0.2,padding:'5px'}} value="Add"></input>
                </form>
           
            </div>
        )
    }
}

export default AddTodo
