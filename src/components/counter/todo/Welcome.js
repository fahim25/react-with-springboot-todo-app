import { Link, useParams } from "react-router-dom";


function WelcomeComp() {
    let { name } = useParams();
    return (
      <div>
        <h4>Welcome {name}!!</h4>
        <p>You can manage your todos <Link to="/todolist">here</Link></p>
      </div>
    )
}

export default WelcomeComp
