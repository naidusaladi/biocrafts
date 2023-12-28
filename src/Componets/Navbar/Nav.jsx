

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav.css'
function BNavbar() {
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary" style={{position:"fixed",zIndex:"1",width:"100%"}}>
      <Container fluid >
        <Navbar.Brand href="#">BioCrafts</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className='navItems'>
          <Nav
            className="me-auto my-2 my-lg-10"
            style={{ maxHeight: '250px' }}
            navbarScroll
          >
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Ban">About</Nav.Link>
            <Nav.Link href="#action3">Blog</Nav.Link>
            <NavDropdown title="Products" id="navbarScrollingDropdown">
              {/* <NavDropdown.Item href="#action4">Action</NavDropdown.Item> */}
              <NavDropdown.Item href="#Ban">
                Banboo Products
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Jut">
                Jute Products
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          </div>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default BNavbar;