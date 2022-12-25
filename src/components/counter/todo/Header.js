import {  Link } from "react-router-dom"
import AuthService from "./AuthService"

const Header = () =>{

    const isUserLogin = AuthService.isUserLogin();
  
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
                { isUserLogin &&  <Link className="nav-link active" aria-current="page" to="/welcome">Home</Link> }
                </li>
                <li className="nav-item">
                { isUserLogin &&  <Link className="nav-link active" aria-current="page" to="/todolist">Todos</Link>}
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/login">login</Link>
                </li>
                <li className="nav-item">
                { isUserLogin &&  <Link className="nav-link active" aria-current="page" to="/logout" onClick={AuthService.logOut}>logout</Link>}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
}

export default Header