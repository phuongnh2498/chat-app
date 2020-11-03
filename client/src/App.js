import React from 'react'
import './assets/app.scss'
import { Header, Footer, ChatBox } from './Component'
import { Container, Col, Row } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Header />
      <Container className="content__container">
        <Container fluid>
          <Row>
            <Col md={3}>
              <h4>Left not</h4>
            </Col>
            <Col md={9}>
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