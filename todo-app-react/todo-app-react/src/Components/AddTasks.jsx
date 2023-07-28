import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";

const AddTasks = () => {
    
  const [task, setTaks] = useState({
    taskName: "",
    taskDescription: "",
    status: "",
    complexity: "",
  });

  const { taskName, taskDescription, status, complexity } = task;

  return (
    <div>
      <Form>
        <FloatingLabel
          controlId="floatingInput"
          label="TASK NAME"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="TASK NAME" />
        </FloatingLabel>{" "}
        <FloatingLabel
          controlId="floatingInput"
          label="TASK DESCRIPTION"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="TASK DESCRIPTION" />
        </FloatingLabel>{" "}
        <FloatingLabel
          controlId="floatingInput"
          label="TASK STATUS"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="TASK STATUS" />
        </FloatingLabel>{" "}
        <FloatingLabel
          controlId="floatingInput"
          label="TASK DESCRIPTION"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="TASK DESCRIPTION" />
        </FloatingLabel>{" "}
        <FloatingLabel
          controlId="floatingInput"
          label="TASK COMPLEXITY"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="TASK COMPLEXITY" />
        </FloatingLabel>{" "}
      </Form>
    </div>
  );
};

export default AddTasks;
