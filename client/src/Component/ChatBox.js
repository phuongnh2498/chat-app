import React from 'react'
import '../assets/chatbox.scss'
import { Button, Form, FormControl } from 'react-bootstrap';

export default function ChatBox() {
    return (
        <div className="chatbox__container">
            <h2 className="text-center">Chat Box1</h2>
            <div className="chatbox">
                <div className="message__container">
                    <div className="message__image">
                        <img className="profile__image" src="/default-profile-icon.jpg" alt="" />
                    </div>
                    <p className="message__text">
                        Hello HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello HelloHelloHelloHello HelloHelloHelloHelloHelloHello
                    </p>
                </div>
                <div className="message__container">
                    <p className="message__text reply">
                        Hello HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello HelloHelloHelloHello HelloHelloHelloHelloHelloHello
                    </p>
                </div>
            </div>
            <div className="message__box">
                <Form inline >
                    <FormControl type="text" className="mr-sm-2 message__input" />
                    <Button variant="outline-info">Send</Button>
                </Form>
            </div>
        </div>
    )
}
