import axios from "axios";

class AuthService {
  createBasicAuthToken(userName, password) {
    return "Basic " + window.btoa(userName + ":" + password);
  }

  executeBasicAuth(userName, password) {
    return axios.get("http://localhost:8080/basicAuth", {
      headers: {
        authorization: this.createBasicAuthToken(userName, password),
      },
    });
  }

  regSuccessLogin(userName, password) {
    sessionStorage.setItem("authUser", userName);
    sessionStorage.setItem("pass", password);
    this.setUpAxiosInterceptors(this.createBasicAuthToken(userName, password));
  }

  logOut() {
    sessionStorage.removeItem("authUser");
  }

  isUserLogin() {
    let user = sessionStorage.getItem("authUser");
    if (user == null) {
      return false;
    } else {
      return true;
    }
  }

  getLoggedInUser() {
    let user = sessionStorage.getItem("authUser");
    if (user === null) {
      return "";
    } else {
      return user;
    }
  }

  setUpAxiosInterceptors(basicAuthHeader) {
    /*  let userName = "username";
    let password = "password";

    let basicAuthHeader = "Basic " + window.btoa(userName + ":" + password); */

    axios.interceptors.request.use((config) => {
      if (this.isUserLogin()) {
        config.headers.authorization = basicAuthHeader;
      }
      return config;
    });
  }
}

export default new AuthService();
