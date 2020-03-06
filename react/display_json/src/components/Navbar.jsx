import React from 'react';
import {Nav, Navbar, FormControl, Form, Button} from 'react-bootstrap';

export default function NavbarList() {
    return (
        <>
        <Navbar bg="dark" variant="dark" style={{height:'100px'}}>
    <Navbar.Brand href="#home">CherryBloom</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Flowers</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Looking for a flower?" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  

        </>
    )
}
