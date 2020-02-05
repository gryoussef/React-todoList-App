import React from 'react'
import {Link}from 'react-router-dom';
export default function Header() {
    return (
        <div style={headerStyle}>
           <h2>TodoList</h2> 
           <p><Link style={headerStyle} to='/'>Home</Link>
           <Link style={headerStyle} to='/about'>| About</Link></p>
           
        </div>
    )
}

const headerStyle={
    backgroundColor:'#000',
    color:'#fff',
    
   
}