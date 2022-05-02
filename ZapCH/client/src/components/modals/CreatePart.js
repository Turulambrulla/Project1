import React, { useContext, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button, Dropdown, Col, Row} from "react-bootstrap";
import { Context } from '../..';

const CreatePart = ({show, onHide}) => {
    const {part} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo=() =>{
        setInfo([...info,{title:'',description:'', number: Date.now()}])
    }
    const removeInfo=(number) =>{
        setInfo(info.filter(i => i.number !== number))
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

                    <Dropdown className="mt-3">
                        <Dropdown.Toggle>Выберите авто</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {part.autos.map(auto =>
                                <Dropdown.Item key={auto.id}>{auto.mark}</Dropdown.Item>
                                )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-3">
                    <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
                        <Dropdown.Menu>
                        {part.brands.map(brand =>
                                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                                )}
                        </Dropdown.Menu>
                    </Dropdown>
                        <Form.Control className="mt-3"
                            placeholder='Введите название'
                        />
                        <Form.Control className="mt-3"
                            placeholder='Описание'
                        />
                        <Form.Control className="mt-3"
                            placeholder='Введите стоимость'
                            type="number"
                        />
                        <Form.Control className="mt-3"
                            type="file"
                        />
                <hr/>
                <Button 
                    variant={'outline-dark'}
                    onClick={addInfo}
                >Добавить новое свойство</Button>
                {
                    info.map(i =>
                        <Row className="mt-3" key={i.number}> 
                            <Col md={4}>
                                <Form.Control
                                    placeholder='Введите название свойства'
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder='Введите описание свойства'
                                />
                            </Col>
                            <Col md={4}>
                                <Button 
                                onClick={()=> removeInfo(i.number)}
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