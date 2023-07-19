import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Start = () => {
    return ( 
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">TASK MANAGER APP</Navbar.Brand>
      </Container>
        </Navbar>
     );
}
 
export default Start;