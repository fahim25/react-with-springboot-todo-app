import React, { useEffect, useState } from "react"
import TodoDataService from "../../../api/todo/TodoDataService"
import AuthService from "./AuthService";



// var todos=[
//     { id:1, description:'Learn React', done:false, targetDate: new Date()},
//     { id:2, description:'Learn React',done:false, targetDate: new Date()},
//     { id:3, description:'Learn React',done:false, targetDate: new Date()}
// ]


const TodoList = () => {

  let [todos,setTodos ] = useState();
  let [message,setMessage ] = useState();


  function deleteTodo(id){
    let userName = AuthService.getLoggedInUser();
  
    TodoDataService.deleteTodo(userName, id)
    .then(
      response =>{
        setMessage(message= `Detele of todo ${id} successful!`)
      }
    )

  }

  useEffect(() => {
    let userName = AuthService.getLoggedInUser();
    TodoDataService.getAllTodos(userName)
    .then(
      response =>{
        setTodos(response.data)
      }
    )
  });

    return (
      <>
        <h4>TodoList</h4>
        { message && <div className="alert alert-danger">{message}</div>}
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>id</th>
                <th>description</th>
                <th>Targat Date</th>
                <th>Is Completed?</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* for featching data */}
              {todos && todos.map((todos,index) =>
                <tr key={index}>
                  <td>{todos.id}</td>
                  <td>{todos.description}</td>
                  <td>{todos.targetDate.toString()}</td>
                  <td>{todos.done.toString()}</td>
                  <td><button className="btn btn-danger" onClick={() => deleteTodo(todos.id) } >Delete</button></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </>
    )
    
}

export default TodoList
