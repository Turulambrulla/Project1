import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import { createAuto } from '../../http/partAPI';

const CreateAuto = ({ show, onHide }) => {
    const [mark,  setMark] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState(0)
    const [dvs,  setDvs] = useState('')

    const addAuto = () => {
        const formData = new FormData()
        formData.append('mark', mark)
        formData.append('model', model)
        formData.append('year', year)
        formData.append('dvs', dvs)
        createAuto(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить авто
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>

                    <Form.Control
                        value={mark}
                        onChange={e => setMark(e.target.value)}
                        className="mt-3"
                        placeholder='Введите марку'
                    />
                    <Form.Control
                        value={model}
                        onChange={e => setModel(e.target.value)}
                        className="mt-3"
                        placeholder='Введите модель'
                    />
                    <Form.Control
                        value={year}
                        onChange={e => setYear(e.target.value)}
                        className="mt-3"
                        placeholder='Введите год выпуска'
                        type="number"
                    />
                    <Form.Control
                        value={dvs}
                        onChange={e => setDvs(e.target.value)}
                        className="mt-3"
                        placeholder='Введите марку ДВС'
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addAuto}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateAuto;