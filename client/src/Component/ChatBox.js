import React, { useState, useRef, useEffect } from 'react'
import '../assets/chatbox.scss'
import { Button, Form, FormControl } from 'react-bootstrap';
import { useChatContext } from '../Context/ChatContext'
import { useAuth } from '../Context/AuthContext'
import ChatMessage from './ChatMessage'


export default function ChatBox() {
    const downhere = useRef()
    const { messages, sendMessage } = useChatContext();
    const { currentUser } = useAuth();

    const handleSubmit = e => {
        e.preventDefault();
        sendMessage(formValue, currentUser)
        setFormValue('')
    }
    useEffect(() => {
        downhere.current.scrollIntoView({ behavior: 'smooth' })
    }, [messages])
    const [formValue, setFormValue] = useState('');


    return (
        <div className="chatbox__container">
            <h4><span role="img" aria-label="dragon">Send A Message 🕊</span></h4>
            <div className="chatbox">
                {
                    messages?.map(msg => <ChatMessage key={msg.id} message={msg} />)
                }
                <div ref={downhere} />
            </div>
            <div className="message__box">
                <Form inline onSubmit={handleSubmit}>
                    <FormControl type="text" className="mr-sm-2 message__input" value={formValue} onChange={e => setFormValue(e.target.value)} />
                    <Button type="submit" variant="outline-info" >Send</Button>
                </Form>
            </div>
        </div>
    )
}
