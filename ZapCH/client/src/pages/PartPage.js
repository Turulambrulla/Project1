import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";


const PartPage = () => {
    const part = { id: 1, name: 'Свеча зажигания', price: '2000', bgandId: 2, autoId: 1 }
    const description = [
        {id:1, partId:1, title: 'inhbishbhtbh', discription: 'tgr'},
        {id:2, partId:3, title: 'serths', discription: 'rthe'},
        {id:3, partId:2, title: 'kuik', discription: 'erlgyuhafvoltgygdfvglogf'},
        {id:4, partId:1, title: '79832', discription: '648vgr486gvtr648'},
    ]
    return (
        <Container className="mt-5"
        
        >
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={'no-img.png'} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex justify-content-between align-items-center">
                        <h2 style={{fontSize: 20}}>{'Наименование запчасти:' }</h2>
                        <h2>{part.name}</h2>
                    </Row>
                </Col>
                <Col md={4}>
                    <Row className="d-flex justify-content-between align-items-center">
                    <h2 style={{fontSize: 20}}>{'Цена:' }</h2>
                        <h2>{part.price +' руб.'}</h2>
                    </Row>
                </Col>

            </Row>
            <Row className="d-flex flex-column m-3">
            <h2 style={{fontSize: 20}}>{'Информация:' }</h2>
            {description.map((info, index) =>
                <Row key={info.partId} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                    {info.title}: {info.discription}
                </Row>
            )}
            </Row>
        </Container>
    )
}

export default PartPage;