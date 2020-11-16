import React, { useState } from 'react'
import { ListGroup, Button, Modal } from 'react-bootstrap'

export default function Conversation() {
    const [isOpenModal, setOpenModal] = useState(false);
    function closeModal() {
        setOpenModal(false)
    }
    return (
        <div className="left__container ">
            <h4 className="mb-md-3">Conversation</h4>
            <Button className="rounded-0 w-100 text-uppercase font-weight-bold mb-md-3  " variant="light" onClick={() => setOpenModal(true)}>
                <span role="img" aria-label="dragon">🐱‍🐉</span>
            </Button>
            <Modal show={isOpenModal} onHide={closeModal}>
                <Modal.Header closeButton><span role="img" aria-label="dragon">Undevelop 😥</span></Modal.Header>
            </Modal>
            {/* <div className="contact overflow-auto">
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
            </div> */}

        </div>
    )
}
