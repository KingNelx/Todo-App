import Table from "react-bootstrap/Table";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Images/logo.png";
import Swal from "sweetalert2";
import Modal from 'react-bootstrap/Modal';
import AddTasks from "./AddTasks";
import { useParams } from "react-router-dom";

const ViewTasks = () => {

  const {id} = useParams()  

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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [tasks, setTasks] = useState([]);

  const loadAllTasks = async () => {
    const result = await axios.get("http://localhost:8080/api-task/get-tasks");
    try {
      if (result.status === 200) {
        setTasks(result.data);
      }
    } catch (error) {
      alert(" ERROR MESSAGE: " + error);
    }
  };

  const removeTasks = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'TASK DELETED',
        showConfirmButton: false,
        timer: 1500
    })
  }
  const deleteTasks = async(id) => {
    try {
      const result = await axios.delete(`http://localhost:8080/api-task/delete-task/${id}`)
      if(result.status === 200){
        removeTasks()
        loadAllTasks()
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      alert(" ERROR MESSAGE: " + error)
    }
  }

  useEffect(() => {
    loadAllTasks();
  }, []);

  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark" className="shadow-lg">
          <Navbar.Brand className="mx-3">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <Link to="/" style={
              {textDecoration: "none"}
            } onClick={swalFire} >TASK APP</Link>
          </Navbar.Brand>
        </Navbar>
      </>
      <div>
      <>
      <Button variant="outline-primary" className="mt-5 mx-5" onClick={handleShow}>
       CREATE TASK
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>ADD TASKS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddTasks />
        </Modal.Body>
      </Modal>
    </>
        <div
          className="container text-center"
          style={{
            maxHeight: "calc(80vh - 150px)",
            overflowY: "auto",
            marginTop: "5vh",
          }}
        >
          {tasks.length > 0 ? (
            <Table striped bordered hover>
              <thead style={{ position: "sticky", top: 0 }}>
                <tr>
                  <th>#</th>
                  <th>Task name</th>
                  <th>Task Description</th>
                  <th>Status</th>
                  <th>Complexity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((value, index) => (
                  <tr>
                    <td key={index}>{index + 1}</td>
                    <td>{value.taskName}</td>
                    <td>{value.taskDescription}</td>
                    <td>{value.status}</td>
                    <td>{value.complexity}</td>
                    <td>
                      <Button variant="outline-primary">
                        <span class="material-icons">visibility</span>
                      </Button>
                    <Link to={`/update-tasks/${value.id}`}>
                      <Button variant="outline-success mx-2" onClick={swalFire}>
                        <span class="material-icons">update</span>
                      </Button>
                    </Link>
                      <Button variant="outline-danger" onClick={() => {
                        deleteTasks(value.id);
                        loadAllTasks()
                      }}>
                        <span class="material-icons">delete</span>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p> NO DATA </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewTasks;
