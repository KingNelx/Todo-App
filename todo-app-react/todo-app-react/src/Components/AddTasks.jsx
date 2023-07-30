import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";
import Button from 'react-bootstrap/Button';


const AddTasks = () => {
  const [task, setTaks] = useState({
    taskName: "",
    taskDescription: "",
    status: "",
    complexity: "",
  });

  const { taskName, taskDescription, status, complexity } = task;

  const onInputChange = (e) => {
    const {name, value} = e.target
    // name and value = is the variable that will hold the properties of the object after we extracted it
    // e target (object) = represent the target element when an event occured
  }

  return (
    <div>
      <Form>

        <FloatingLabel
          controlId="floatingInput"
          label="TASK NAME"
          className="mb-3"
        >
          <Form.Control type={"text"} name="taskName" value={taskName} placeholder="TASK NAME" />
        </FloatingLabel>{" "}

        <FloatingLabel
          controlId="floatingInput"
          label="TASK DESCRIPTION"
          className="mb-3"
        >
          <Form.Control type={"text"} name="taskDescription" value={taskDescription} placeholder="TASK DESCRIPTION" />
        </FloatingLabel>{" "}

        <FloatingLabel
          controlId="floatingInput"
          label="TASK STATUS"
          className="mb-3"
        >
          <Form.Control type={"text"} name="status" value={status} placeholder="TASK STATUS" />
        </FloatingLabel>{" "}

        <FloatingLabel
          controlId="floatingInput"
          label="TASK DESCRIPTION"
          className="mb-3"
        >
          <Form.Control type={"text"} name="complexity" value={complexity} placeholder="TASK DESCRIPTION" />
        </FloatingLabel>{" "}

        <FloatingLabel
          controlId="floatingInput"
          label="TASK COMPLEXITY"
          className="mb-3"
        >
          <Form.Control type={"text"} placeholder="TASK COMPLEXITY" />
        </FloatingLabel>{" "}

        <Button variant="outline-primary" type="submit"> SUBMIT </Button>

      </Form>
    </div>
  );
};

export default AddTasks;
