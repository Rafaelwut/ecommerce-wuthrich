import React from 'react'
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';
// import logo from './assets/png/'

const NavBar = () => {
    return (
        <Navbar bg="light" variant="light">
             <Container>
                 <Navbar.Brand href="#home">Malvin design</Navbar.Brand>
                 <Nav className="me-auto">
                    <Nav.Link href="#home">Productos</Nav.Link>
                    <Nav.Link href="#features">Ofertas</Nav.Link>
                    <Nav.Link href="#pricing">Contactanos</Nav.Link>
                    <Nav.Link href="#/"><CartWidget /></Nav.Link>           
                </Nav>
            </Container>
        </Navbar>   
    )
}

export default NavBar
