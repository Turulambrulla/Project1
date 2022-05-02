import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateAuto from '../components/modals/CreateAuto';
import CreateBrand from '../components/modals/CreateBrand';
import CreatePart from '../components/modals/CreatePart';


const Admin = () => {

    const [autoVisible, setAutoVisible] = useState(false)
    const [brandVisible, setBrandVisible] = useState(false)
    const [partVisible, setPartVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setAutoVisible(true)}
            >
                Добавить авто
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setBrandVisible(true)}
            >
                Добавить бренд
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setPartVisible(true)}
            >
                Добавить запчасть
            </Button>
            <CreateAuto show={autoVisible} onHide={() => setAutoVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreatePart show={partVisible} onHide={() => setPartVisible(false)}/>

        </Container>
    );
};

export default Admin;