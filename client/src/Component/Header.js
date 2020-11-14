import React from 'react'
import '../assets/_header.scss'
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { auth } from '../Context/firebase';

export default function Header({ user }) {
    function SignOut() {
        return auth.currentUser && (
            <Button className="btn-logout" onClick={() => auth.signOut()} href="#home">Log out</Button>
        )
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home" className="mr-auto">Chat App</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">{user ? "welcome" : "Login"}</Nav.Link>
                <Nav.Link href="#features">About</Nav.Link>
            </Nav>
            <Nav >
                {user && <Button className="btn-logout" href="#home">Log out</Button>}
            </Nav>
            {SignOut}
        </Navbar>
    )
}
