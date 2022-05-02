import React from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";

const CreateAuto = ({show, onHide}) => {

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить запчасть
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>

                        <Form.Control className="mt-3"
                            placeholder='Введите марку'
                        />
                        <Form.Control className="mt-3"
                            placeholder='Введите модель'
                        />
                        <Form.Control className="mt-3"
                            placeholder='Введите год выпуска'
                            type="number"
                        />
                        <Form.Control className="mt-3"
                            placeholder='Введите марку ДВС'
                        />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateAuto;