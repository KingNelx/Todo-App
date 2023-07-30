import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from 'axios'

const Start = () => {
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
<div className="container d-flex justify-content-center align-items-center mt-5">
      <Card style={{ width: "20rem", marginTop: "10vh" }}>
        <Card.Img variant="top" src={logo} className="shadow-lg" />
        <Card.Body className="text-center">
          <Card.Title>TASK APP</Card.Title>
          <Link to="/view-task">
            <Button variant="outline-primary" onClick={swalFire}>
              GET STARTED
            </Button>{" "}
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Start;

