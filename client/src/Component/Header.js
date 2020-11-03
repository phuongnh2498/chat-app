import React from 'react'
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home" className="mr-auto">Chat App</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Login</Nav.Link>
                <Nav.Link href="#features">About</Nav.Link>
            </Nav>
        </Navbar>
    )
}
