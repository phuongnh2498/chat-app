import React from 'react'
import { ListGroup, Button, Modal } from 'react-bootstrap'

export default function Conversation() {

    return (
        <div className="left__container ">
            <h4 className="mb-md-3">Conversation</h4>
            <Button className="rounded-0 w-100 text-uppercase font-weight-bold mb-md-3  " variant="light">
                Add Contact
            </Button>
            <div className="contact overflow-auto">
                <ListGroup variant="flush">
                    <ListGroup.Item active>
                        item1
                    </ListGroup.Item>
                    <ListGroup.Item>
                        item1
                    </ListGroup.Item>
                    <ListGroup.Item>
                        item1
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <Modal show>
                <h1>Hello</h1>
            </Modal>
        </div>
    )
}
