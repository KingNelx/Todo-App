import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom"
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const UpdateTasks = () => {

  const {id} = useParams()
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

  useEffect( () => {
  if(id){
    loadTasks()
  }
  }, [id])
  const onSubmit = async(e) => {
    e.preventDefault()
    try {
      const response = await axios.put(`http://localhost:8080/api-task/update-tasks/${id}`, task)
      if(response.status === 200){
        navigate('/view-task')
      }
    } catch (error) {
      alert("ERROR MESSAGE: " + error)
    }
  }

  const loadTasks = async () => {   
    try{
        const result = await axios.get(`http://localhost:8080/api-task/get-tasks/${id}`)
        if(result.status === 200){
            setTaks(result.data)
        }
    }catch(error){
        alert(" ERROR MESSAGE: " + error)
    }
  }

  const saveData = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'TASK UPDATED',
        showConfirmButton: false,
        timer: 1500
    })
}

const swalFire = async () => {
    let timerInterval;
    await Swal.fire({
      title: "Loading!",
      html: "Please Wait!",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  };

  return (
    <div className="container mt-5">
        <h2 className="text-center mb-5"> UPDATE TASKS </h2>
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
          label="TASK COMPLEXITY"
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

        <Button variant="outline-primary" type="submit" onClick={saveData} >SUBMIT</Button> {" "}
        <Link to="/view-task"><Button variant="outline-danger" onClick={swalFire}> CANCEL </Button></Link>
      </Form>
    </div>
  );
};

export default UpdateTasks;
