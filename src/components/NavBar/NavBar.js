import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';
import "./NavBar.css"
import { useCartContext } from '../context/cartContext';
// import logo from './assets/png/'

const NavBar = () => {

    const { cantidadItem } = useCartContext()

    const numberCart = cantidadItem()




    return (
        <Navbar bg="light" variant="light" className='nav'>
            <Container>

                <Link to= '/' className='logo'>
                    <Navbar.Brand >Malvin design</Navbar.Brand>
                </Link>
                
                <Nav className="me-auto" className="navegador">
                    <Link to="/categoria/decoHogar" className='navLink'>DecoHogar</Link>
                    <Link to="/categoria/mate" className='navLink'>Para el Mate</Link>
                    <Link to="/categoria/baño" className='navLink'>Para tu baño</Link>
       
                </Nav>
                <Nav className='carrito'>
                    <Link to='/cart'>
                        <CartWidget />
                    </Link> 
                    {numberCart > 0 ? <div>{numberCart} </div>: <div></div>}
                </Nav>    

            </Container>
        </Navbar>   
    )
}

export default NavBar
