import React from 'react'
import './assets/app.scss'
import { Header, Footer, ChatBox, SideBar } from './Component'
import { Container, Col, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="content__container">
        <Container fluid>
          <Row>
            <Col md={4}>
              <SideBar />
            </Col>
            <Col md={8}>
              <ChatBox />
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </div >
  );
}
export default App;