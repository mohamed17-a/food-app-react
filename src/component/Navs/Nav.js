import './Navs.css';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from './../../assets/logo.png'
const Navs = () => {
    return (
        <Navbar expand="lg" >
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#About">About us</Nav.Link>
                        <Nav.Link href="#Explore">Explore Foods</Nav.Link>
                        <Nav.Link href="#Reviews">Reviews</Nav.Link>
                        <Nav.Link href="#FAQ">FAQ</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link id='lastitem'>011111111</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Navs;