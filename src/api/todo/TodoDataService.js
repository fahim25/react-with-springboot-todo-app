import axios from "axios";
class TodoService {
  getAllTodos(name) {
    return axios.get(`http://localhost:8080/users/${name}/todos`);
  }

  deleteTodo(name, id) {
    return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
  }

  getTodo(name, id) {
    return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
  }

  updateTodo(name, id, todo) {
    return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo);
  }

  addTodo(name, todo) {
    return axios.post(`http://localhost:8080/users/${name}/todos/`, todo);
  }
}

export default new TodoService();
