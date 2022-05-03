import React from "react";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom";
import { PART_ROUTE } from "../utils/consts";

const PartItem = ({ part }) => {
    const history = useHistory()

    return (

        <Card
            style={{ height: 102, cursor: 'pointer' }}
            border={"grey"}
            className={"mt-3"}
            onClick = {() => history.push(PART_ROUTE + '/' + part.id)}
            >
            <div>
                <div className="d-flex justify-content-between align-items-center">

                    <Image width={100} height={100} src={process.env.REACT_APP_API_URL + part.img} />
                    <div>
                        {part.name}
                    </div>
                    <div>
                        {part.brand}
                    </div>
                    <div className={"p-3"} >
                        {'Цена: '+ part.price + ' руб.'}
                    </div>
                </div>
            </div>
        </Card>

    )
}

export default PartItem