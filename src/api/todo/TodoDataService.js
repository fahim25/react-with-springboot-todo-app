import axios from "axios";
class TodoService{

    getAllTodos(name){
        return axios.get("http://localhost:8080/users/${name}/todos")
    }
}

export default new TodoService()