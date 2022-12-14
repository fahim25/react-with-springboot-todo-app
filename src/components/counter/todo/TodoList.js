import React from "react"

var todos=[
    { id:1, description:'Learn React', done:false, targetDate: new Date()},
    { id:2, description:'Learn React',done:false, targetDate: new Date()},
    { id:3, description:'Learn React',done:false, targetDate: new Date()}
]

const TodoList = () => {
    return (
      <>
        <h4>TodoList</h4>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>id</th>
                <th>description</th>
                <th>Targat Date</th>
                <th>Is Completed?</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todos,index) =>
                <tr key={index}>
                  <td>{todos.id}</td>
                  <td>{todos.description}</td>
                  <td>{todos.targetDate.toString()}</td>
                  <td>{todos.done.toString()}</td>
                </tr>
              )}
              
            </tbody>
          </table>
        </div>
      </>
    )
}

export default TodoList
