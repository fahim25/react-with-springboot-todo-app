import React from "react"
import { Component } from "react";
import {  
  BrowserRouter,
  Routes,
  Route, 
  useNavigate,
  useParams, 
  Link
} from "react-router-dom";

const TodoApp = () => {
    return (
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={ <AppWithRoute/>} />
            <Route path="/login" element={<AppWithRoute/>} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="/welcome/:name" element={<WelcomeComp/>} />
            <Route path="/todolist" element={<TodoList/>} />
            <Route path="*" element={<ErrorComponent/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )
}

const Header = () =>{
  return(
    <header className="pb-5">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="/">TODO APP</a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/welcome">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/todolist">Todos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/logout">logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

const Footer = () =>{
  return(
    <footer className="footer">
      <span className="text-center">Todo App &copy; 2023</span>
    </footer>
  )
}

const Logout = () =>{
  return(
    <div className="mt-5">
      <h1>You are logged out!</h1>
    </div>
  )
}
var todos=[
  { id:1, description:'Learn React', done:false, targetDate: new Date()},
  { id:2, description:'Learn React',done:false, targetDate: new Date()},
  { id:3, description:'Learn React',done:false, targetDate: new Date()}
]

const TodoList = () => {
  return (
    <>
      <h4>TodoList</h4>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>id</th>
              <th>description</th>
              <th>Targat Date</th>
              <th>Is Completed?</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todos,index) =>
              <tr key={index}>
                <td>{todos.id}</td>
                <td>{todos.description}</td>
                <td>{todos.targetDate.toString()}</td>
                <td>{todos.done.toString()}</td>
              </tr>
            )}
            
          </tbody>
        </table>
      </div>
    </>
  )
}

function WelcomeComp() {
  let { name } = useParams();
  return (
    <div>
      <h4>Welcome {name}!!</h4>
      <p>You can manage your todos <Link to="/todolist">here</Link></p>
    </div>
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
       /* this.setState({successMessage:true})
       this.setState({loginFailed:false}) */
      
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
          <div class="mb-3">
            <label for="username" class="form-label">User Name</label>
            <input className="form-control" id="username" type="text" name="userName" value={this.state.userName} onChange={this.handleChange} />
          </div>
          <div class="mb-3">
            <label for="pass" class="form-label">Password</label>
            <input id="pass" className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
          </div>
         <button className="btn btn-primary mt-4" onClick={this.handleLogin} >Log In</button>
      </>
   )
  }
}

/* function ErrorMessage (props) {
  if(props.loginFailed){
    return <h4>Log in failed!</h4>
  }
  return null
} */

/* function SuccessMsg (props){
  if(props.successMessage){
    return <h4>Log in Successful!</h4>
    
  }
  return null
} */

export function AppWithRoute(props){
  const navigate = useNavigate();
  return(
    <LogIn navigate={navigate}></LogIn>
  )
}

function ErrorComponent(){
  return <h2>Something went wrong!</h2>
}


export { TodoApp, LogIn, WelcomeComp }
