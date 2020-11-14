import React, { useRef } from 'react'
import { Button, Form, FormGroup, Modal } from 'react-bootstrap'

export default function ModalAddContact() {
    const nameRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault()

    }
    return (
        <>
            <Modal.Body>
                <FormGroup onSubmit={handleSubmit}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" ref={nameRef} required />
                </FormGroup>
                <Button type="submit">Add</Button>
            </Modal.Body>
        </>
    )
}
