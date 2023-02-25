/* import { Field, Formik, Form, ErrorMessage } from "formik";
// import { useSubmitImpl } from '@react-admin/ra-relationships';
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import TodoDataService from "../../../api/todo/TodoDataService";
import AuthService from "./AuthService";
import { useParams, useNavigate } from "react-router-dom";

const TodoComponent = () => {
  const { id } = useParams();

  const [todo, setTodo] = useState({
    id: "",
    description: "",
    targetDate: moment(new Date()).format("YYYY-MM-DD"),
  });

  const handleIdChange = (event) => {
    setTodo({
      ...todo,
      id: event.target.value,
    });
  };

  const handleDescriptionChange = (event) => {
    setTodo({
      ...todo,
      description: event.target.value,
    });
  };

  const handleTargetDateChange = (event) => {
    setTodo({
      ...todo,
      targetDate: event.target.value,
    });
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (id === -1) {
      return null;
    }

    let userName = AuthService.getLoggedInUser();
    TodoDataService.getTodo(userName, id).then((response) =>
      setTodo({
        description: response.data.description,
        targetDate: moment(response.data.targetDate).format("YYYY-MM-DD"),
      })
    );
  }, [id]);

  let { description, targetDate } = todo;
  //   let targetDate = todo.targetDate;

  const submit = (values) => {
    let userName = AuthService.getLoggedInUser();

    let todo = {
      id: id,
      description: values.description,
      targetDate: values.targetDate,
    };

    if (id === -1) {
      TodoDataService.createTodo(userName, todo).then(() =>
        navigate("/todolist")
      );
    } else {
      TodoDataService.updateTodo(userName, id, todo).then(() =>
        navigate("/todolist")
      );
    }
  };

  const validate = (value) => {
    let error = {};
    if (!value.description) {
      error.description = "Enter a Description";
    } else if (value.description.length < 5) {
      error.description = "Description should be atleast 5 char!";
    }

    if (!moment(value.targetDate).isValid()) {
      error.targetDate = "Enter a valid date!";
    }
    return error;
  };

  // function updateTodo(id) {
  //   let userName = AuthService.getLoggedInUser();

  //   TodoDataService.updateTodo(userName, id).then((response) =>
  //     setTodo({
  //       description: response.data.description,
  //       targetDate: response.data.targetDate,
  //     })
  //   );
  // }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1>Updat Todo</h1>
          <Formik
            initialValues={{
              description,
              targetDate,
              id,

              // description: description,
              // targetDate: targetDate
            }}
            onSubmit={(values) => submit(values)}
            // onSubmit={value=>{
            //     console.log(value)
            // }}
            validate={validate}
            validateOnChange={false}
            validateOnBlur={false}
            enableReinitialize={true}
          >
            <Form>
              <ErrorMessage
                name="description"
                component="div"
                className="alert alert-warning"
              />
              <ErrorMessage
                name="targetDate"
                component="div"
                className="alert alert-warning"
              />

              <fieldset className="form-group">
                <label className="py-2">Description</label>
                <Field
                  className="form-control"
                  type="text"
                  name="description"
                  value={values.description}
                  onChange={handleDescriptionChange}
                />
              </fieldset>
              <fieldset className="form-group">
                <label className="py-2">Target Date</label>
                <Field
                  className="form-control"
                  type="date"
                  name="targetDate"
                  value={todo.targetDate}
                  onChange={handleTargetDateChange}
                />
              </fieldset>
              <button className="btn btn-success mt-3" type="submit">
                Save
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default TodoComponent;
 */
