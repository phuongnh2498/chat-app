import React from 'react'
import '../assets/_header.scss'
import { Button, Navbar, Nav } from 'react-bootstrap';
import { useAuth } from '../Context/AuthContext';

export default function Header() {
    const { signOut, currentUser } = useAuth();

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/" className="mr-auto">Chat App</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">{currentUser ? currentUser.email : "Login"}</Nav.Link>
            </Nav>
            {
                currentUser &&
                <Nav >
                    <Button className="btn-logout" onClick={() => signOut()} >Log out</Button>
                </Nav>
            }
        </Navbar>
    )
}
