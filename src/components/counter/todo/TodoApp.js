import React from "react"
import { Component } from "react";


const TodoApp = () => {
    return (
        <>
          <LogIn /> 
        </>
      )
}

class LogIn extends Component{

  constructor(props){
    super(props)

    this.state = {
      userName: 'username',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)

    //static

    // this.handleUserName = this.handleUserName.bind(this);
    // this.handlePassword = this.handlePassword.bind(this);
  };

  
  handleChange(event){
    this.setState({
        [event.target.name]
        :event.target.value
    })
  }

  //static 

  // handleUserName(event){
  //   this.setState({userName:event.target.value})
  // }
  // handlePassword(event){
  //   this.setState({password:event.target.value})
  // }

  render(){
    return(
      <>
         User Name: <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange} />
         Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
         <button>Log In</button>
      </>
   )
  }
}

export { TodoApp, LogIn }
