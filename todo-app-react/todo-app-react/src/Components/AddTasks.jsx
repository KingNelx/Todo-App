import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom"
import Swal from 'sweetalert2'

const AddTasks = () => {

  const navigate = useNavigate()

  const [task, setTaks] = useState({
    taskName: "",
    taskDescription: "",
    status: "",
    complexity: "",
  });

  const { taskName, taskDescription, status, complexity } = task;

  const onInputChange = (e) => {
    const {name, value} = e.target
    setTaks({... task, [name]: value.toUpperCase()})
  }

  const onSubmit = async(e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:8080/api-task/create-task", task)
      if(response.status === 200){
         window.location.reload()
        navigate('/view-task')
      }
    } catch (error) {
      alert("ERROR MESSAGE: " + error)
    }
  }

  const saveData = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'NEW STUDENT ADDED',
        showConfirmButton: false,
        timer: 1500
    })
}

  return (
    <div>
      <Form onSubmit={(e) => onSubmit(e)}>
        <FloatingLabel
          controlId="floatingInput"
          label="TASK NAME"
          className="mb-3"
        >
          <Form.Control
            type={"text"}
            name="taskName"
            value={taskName}
            placeholder="TASK NAME"
            required
            onChange={(e) => onInputChange(e)}
          />
        </FloatingLabel>{" "}

        <FloatingLabel
          controlId="floatingInput"
          label="TASK DESCRIPTION"
          className="mb-3"
        >
          <Form.Control
            type={"text"}
            name="taskDescription"
            value={taskDescription}
            placeholder="TASK DESCRIPTION"
            required
            onChange={(e) => onInputChange(e)}
          />
        </FloatingLabel>{" "}

        <FloatingLabel
          controlId="floatingInput"
          label="TASK STATUS"
          className="mb-3"
        >
          <Form.Control
            type={"text"}
            name="status"
            value={status}
            placeholder="TASK STATUS"
            required
            onChange={(e) => onInputChange(e)}
          />
        </FloatingLabel>{" "}

        <FloatingLabel
          controlId="floatingInput"
          label="TASK DESCRIPTION"
          className="mb-3"
        >
          <Form.Control
            type={"text"}
            name="complexity"
            value={complexity}
            placeholder="TASK COMPLEXITY"
            required
            onChange={(e) => onInputChange(e)}
          />
        </FloatingLabel>{" "}

        <Button variant="outline-primary" type="submit" onClick={saveData} >SUBMIT</Button>
      </Form>
    </div>
  );
};

export default AddTasks;
