import Table from "react-bootstrap/Table";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const ViewTasks = () => {
  return (
    <div
      className="container text-center"
      style={{
        maxHeight: "calc(80vh - 150px)",
        overflowY: "auto",
        marginTop: "20vh",
      }}
    >
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <Button variant="outline-primary">
                <span class="material-icons">post_add</span>
              </Button>{" "}
              <Button variant="outline-primary">Primary</Button>{" "}
              <Link>
                <Button variant="outline-danger">
                  <span class="material-icons">delete</span>
                </Button>
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ViewTasks;
