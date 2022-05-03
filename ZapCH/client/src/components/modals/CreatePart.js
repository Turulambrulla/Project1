import React, { useContext, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Form, Button, Dropdown, Col, Row } from "react-bootstrap";
import { Context } from '../..';
import { createPart } from '../../http/partAPI';

const CreatePart = ({ show, onHide }) => {
    const { part, auto } = useContext(Context)

    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)


    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }
    const selectFile = e => {
        setFile(e.target.files[0])
    }
    
    const addPart = () =>{
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('brand', brand)
        formData.append('img', file)
        formData.append('autoId', auto.selectedAuto.id)
        formData.append('info', JSON.stringify(info))
        createPart(formData).then(data => onHide())
    }

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

                <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{auto.selectedAuto.name || "Выберите авто"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {auto.autos.map(auto =>
                                <Dropdown.Item
                                    onClick={() => part.setSelectedAuto(auto)}
                                    key={auto.id}
                                >
                                    {auto.mark} {auto.model} {auto.year} {auto.dvs}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder='Введите название'
                    />
                    <Form.Control
                        value={brand}
                        onChange={e => setBrand(e.target.value)}
                        className="mt-3"
                        placeholder='Введите бренд'
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder='Введите стоимость'
                        type="number"
                    />
                    <Form.Control className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr />
                    <Button
                        variant={'outline-dark'}
                        onClick={addInfo}
                    >Добавить новое свойство</Button>
                    {
                        info.map(i =>
                            <Row className="mt-3" key={i.number}>
                                <Col md={4}>
                                    <Form.Control
                                        value={i.title}
                                        onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                        placeholder='Введите название свойства'
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        value={i.description}
                                        onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                        placeholder='Введите описание свойства'
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button
                                        onClick={() => removeInfo(i.number)}
                                        variant={'outline-dark'}

                                    >Удалить</Button>
                                </Col>
                            </Row>
                        )
                    }

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreatePart;