import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, Button } from "react-bootstrap";

const MyNavbar = () => {

  return (
   <Navbar>
    <Navbar.Brand href="#logo">Brand</Navbar.Brand>    {/* note:- href here comes from the designer */}
    <Nav className="me-auto">
     <Nav.Link>Shop</Nav.Link>
     <Nav.Link>Recipes</Nav.Link>
     <Nav.Link>Lifestyle</Nav.Link>
     <Nav.Link>Podcast</Nav.Link>
     <Form className="d-flex">
      <Form.Control
           type="search"
           placeholder="Search Products, Recipes & Articles"
           className="me-2"
           aria-label="Search"
           >
           </Form.Control>
           <Button className="search-btn">Search</Button>
     </Form>
     <Nav.Link>العربية</Nav.Link>
     <Nav.Link>Register</Nav.Link>
     <Nav.Link>Sign In </Nav.Link>   {/*note:- we have here 2 fonts coming from font awesome */}
     <Nav.Link>Cart</Nav.Link>
    </Nav>
   </Navbar>
  )
}
export default MyNavbar; 