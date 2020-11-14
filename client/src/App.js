import React from 'react'
import './assets/app.scss'
import { Header, Footer, ChatBox, SideBar, SignIn } from './Component'
import { Container, Col, Row } from 'react-bootstrap';


import { auth } from './Context/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'


function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Header user={user} />
      <Container className="content__container">
        <Container fluid>
          {user ?
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
      <Footer />
    </div >
  );
}
export default App;