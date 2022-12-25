import React from "react"
import { Component } from "react"
import AuthService from "./AuthService";

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
         /* this.setState({successMessage:true})
         this.setState({loginFailed:false}) */
  
         AuthService.regSuccessLogin(this.state.userName);
        
          this.props.navigate(`/welcome/${this.state.userName}`)
  
         /* this.setState({successMessage:true})
         this.setState({loginFailed:false}) */
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
            {/* <ErrorMessage loginFailed={this.state.loginFailed} /> */}
            {/* <SuccessMsg successMessage={this.state.successMessage} /> */}
            {this.state.loginFailed && <h4>Log in failed!</h4>}
            {this.state.successMessage && <h4>Log in Successful!</h4>}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">User Name</label>
              <input className="form-control" id="username" type="text" name="userName" value={this.state.userName} onChange={this.handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="pass" className="form-label">Password</label>
              <input id="pass" className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
            </div>
           <button className="btn btn-primary mt-4" onClick={this.handleLogin} >Log In</button>
        </>
     )
    }
  }

  export default LogIn