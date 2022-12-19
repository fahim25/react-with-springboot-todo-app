import React from "react";
import { Component } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const TodoApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppWithRoute />} />
        <Route path="/login" element={<AppWithRoute />} />
        <Route path="/welcome" element={<WelcomeComp />} />
      </Routes>
    </BrowserRouter>
  );
};

class WelcomeComp extends Component {
  render() {
    return <h4>Welcome to the TodoApp!!</h4>;
  }
}

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "username",
      password: "",
      loginFailed: false,
      successMessage: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleLogin(event) {
    if (this.state.userName === "username" && this.state.password === "pass") {
      this.props.navigate("/welcome");
    } else {
      this.setState({ successMessage: false });
      this.setState({ loginFailed: true });
    }
  }

  render() {
    return (
      <>
        {this.state.loginFailed && <h4>Log in failed!</h4>}
        {this.state.successMessage && <h4>Log in Successful!</h4>}
        User Name:{" "}
        <input
          type="text"
          name="userName"
          value={this.state.userName}
          onChange={this.handleChange}
        />
        Password:{" "}
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.handleLogin}>Log In</button>
      </>
    );
  }
}

export function AppWithRoute(props) {
  const navigate = useNavigate();
  return <LogIn navigate={navigate}></LogIn>;
}

export { TodoApp, LogIn, WelcomeComp };
