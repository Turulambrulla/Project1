import React from "react";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import PartList from "../components/PartList";


const Main = () => {
    return (
        <Container>
            <Row >
                <PartList/>
            </Row>
        </Container>
    )
}

export default Main;