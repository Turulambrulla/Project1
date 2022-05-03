import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { fetchAuto, fetchParts } from '../http/partAPI';
import { useEffect } from "react";
import { Context } from "../index";
import SearchBar from "../components/SearchBar";
import PartList from "../components/PartList";



const Main = observer(() => {

    const { auto, part } = useContext(Context)

    useEffect(() => {
        fetchAuto().then(data => auto.setAuto(data))
        fetchParts().then(data => part.setPart(data.rows))
    })

    return (
        <Container>
            <Row >
                <SearchBar />
            </Row>
            <Row >
                <PartList />
            </Row>
        </Container>
    )
})    

export default Main;