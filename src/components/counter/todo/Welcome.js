import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import HelloWorldService from "../../../api/todo/HelloWorldService";


function WelcomeComp() {
    let { name } = useParams();

    let [welconmeMessage ,setWelcomeMessage] = useState('');

    function getMessage(){
      HelloWorldService.executeHelloWorldService()
      .then(response => setSuccesResponse(response))
      // .catch()
    }

    function setSuccesResponse(response){
      setWelcomeMessage(response.data)
    }

    return (
      <>
        <div>
          <h4>Welcome {name}!!</h4>
          <p>You can manage your todos <Link to="/todolist">here</Link></p>
        </div>
        <div>
          <h4>Get Welcome Message from Spring Boot.</h4>
          <button onClick={getMessage()} className="btn btn-info" >Get Message</button>
          <p>{welconmeMessage}</p>
        </div>
      </>
    )
}

export default WelcomeComp
