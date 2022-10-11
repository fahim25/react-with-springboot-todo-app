import React, { useState }from "react"


const TodoApp = () => {
    return (
        <>
          <LogIn /> 
        </>
      )
}

const LogIn = (props) =>{

  

  return(
     <>
        User Name: <input type="text" name="userName" value={this.state.userName} />
        Password: <input type="password" name="password" />
        <button>Log In</button>
     </>
  )
}

export { TodoApp, LogIn }
