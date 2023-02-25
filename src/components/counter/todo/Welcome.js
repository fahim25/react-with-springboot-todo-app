import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import AuthService from "./AuthService";

function WelcomeComp() {
  let { name } = useParams();

  let [welconmeMessage, setWelcomeMessage] = useState("");

  function getMessage() {
    /* HelloWorldService.executeHelloWorldService()
      .then(response => setSuccesResponse(response))
      .catch(error => setSuccesResponse(handelError(error)))

      HelloWorldService.executeHelloWorldPathVariableService(name)
      .then(response => setSuccesResponse(response))
      .catch() */

    AuthService.executeBasicAuth().then((response) =>
      setSuccesResponse(response)
    );
  }

  function setSuccesResponse(response) {
    // setWelcomeMessage(response.data)
    setWelcomeMessage(response.data.message);
  }

  function handelError(error) {
    setWelcomeMessage(error.response.data.message);
  }

  return (
    <>
      <div>
        <h4>Welcome {name}!!</h4>
        <p>
          You can manage your todos <Link to="/todolist">here</Link>
        </p>
      </div>
      <div>
        <h4>Get Welcome Message from Spring Boot.</h4>
        <button onClick={getMessage()} className="btn btn-info">
          Get Message
        </button>
        <p>{welconmeMessage}</p>
      </div>
    </>
  );
}

export default WelcomeComp;
