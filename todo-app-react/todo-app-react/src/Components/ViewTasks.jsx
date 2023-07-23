import Table from "react-bootstrap/Table";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Images/logo.png";

const ViewTasks = () => {
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
              TASK APP
            </Navbar.Brand>
          </Navbar>
        </>
       <div
          className="container text-center"
          style={{
            maxHeight: "calc(80vh - 150px)",
            overflowY: "auto",
            marginTop: "20vh",
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
                  <th>Priority</th>
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
                      </Button>{" "}
                      <Button variant="outline-success">
                        <span class="material-icons">update</span>
                      </Button>{" "}
                      <Button variant="outline-danger">
                        <span class="material-icons">delete</span>
                      </Button>{" "}
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
  );
};

export default ViewTasks;
