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
      password: '',
      loginFailed: false,
      successMessage: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)

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

  handleLogin(event){

    if(this.state.userName==="username" && this.state.password==="pass"){
       this.setState({successMessage:true})
       this.setState({loginFailed:false})
    }else{
      this.setState({successMessage:false})
      this.setState({loginFailed:true})
    }
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
        

          <ErrorMessage loginFailed={this.state.loginFailed} />
          <SuccessMsg successMessage={this.state.successMessage} />
         User Name: <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange} />
         Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
         <button onClick={this.handleLogin} >Log In</button>
      </>
   )
  }
}

function ErrorMessage (props) {
  if(props.loginFailed){
    return <h4>Log in failed!</h4>
  }
  return null
}

function SuccessMsg (props){
  if(props.successMessage){
    return <h4>Log in Successful!</h4>
    
  }
  return null
}

export { TodoApp, LogIn }
