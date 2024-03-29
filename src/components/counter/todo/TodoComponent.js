import { Field, Formik, Form, ErrorMessage } from "formik";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import TodoDataService from "../../../api/todo/TodoDataService";
import AuthService from "./AuthService";
import { useParams, useNavigate } from "react-router-dom";

// Redo by chat gpt

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
        id: id,
        description: response.data.description,
        targetDate: moment(response.data.targetDate).format("YYYY-MM-DD"),
      })
    );
  }, [id]);

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

  const validate = (values) => {
    let errors = {};
    if (!values.description) {
      errors.description = "Enter a Description";
    } else if (values.description.length < 5) {
      errors.description = "Description should be at least 5 characters long";
    }

    if (!moment(values.targetDate).isValid()) {
      errors.targetDate = "Enter a valid date!";
    }
    return errors;
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1>Update Todo</h1>
          <Formik
            initialValues={{
              description: todo.description,
              targetDate: todo.targetDate,
            }}
            onSubmit={submit}
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
                  onChange={handleDescriptionChange}
                />
              </fieldset>
              <fieldset className="form-group">
                <label className="py-2">Target Date</label>
                <Field
                  className="form-control"
                  type="date"
                  name="targetDate"
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
