import axios from "axios";

class HelloWorldService {
  executeHelloWorldService() {
   /*  let userName = "username";
    let password = "password";

    let basicAuthHeader = "Basic " + window.btoa(userName + ":" + password);

    return axios.get("http://localhost:8080/helloWorld", {
      headers: {
        authorization: basicAuthHeader,
      },
    }); */

    return axios.get("http://localhost:8080/helloWorld");
  }
  /* executeHelloWorldBeanService() {
    return axios.get("http://localhost:8080/helloWorldBean");
  }

  executeHelloWorldPathVariableService(name) {
    return axios.get(`http://localhost:8080/helloWorldBean/${name}`);
  } */
}

export default new HelloWorldService();
