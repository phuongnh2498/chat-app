import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import { ChatBox, SideBar, SignIn } from './Component'
import { useAuth } from "./Context/AuthContext"

export default function AppContent() {
    const { currentUser } = useAuth();
    return (
        <div>
            <Container className="content__container">
                <Container fluid>
                    {currentUser ?
                        <Row>
                            <Col md={4}>
                                <SideBar />
                            </Col>
                            <Col md={8}>
                                <ChatBox />
                            </Col>
                        </Row>
                        : <SignIn />
                    }
                </Container>
            </Container>
        </div>
    )
}
