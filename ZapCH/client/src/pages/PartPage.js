import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router-dom";
import { fetchOnePart } from "../http/partAPI";


const PartPage = () => {
    const [part, setPart] = useState({ info: [] })
    const { id } = useParams()
    console.log(part)
    useEffect(() => {
        fetchOnePart(id).then(data => setPart(data))
    }, [])

    return (
        <Container className="mt-5">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + part.img} />
                </Col>

                <Row>
                    <h2 style={{ fontSize: 20 }}>{'Наименование запчасти: ' + part.name}</h2>
                </Row>

                <Row>
                    <h2 style={{ fontSize: 20 }}>{'Цена: ' + part.price + ' руб.'}</h2>
                </Row>


            </Row>
            <Row className="d-flex justify-content-between align-items-center">
                <h2 style={{ fontSize: 20 }}>{'Бренд: ' + part.brand}</h2>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h2 style={{ fontSize: 20 }}>{'Информация:'}</h2>
                {part.info.map((info, index) =>
                    <Row key={info.partId} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    )
}

export default PartPage;