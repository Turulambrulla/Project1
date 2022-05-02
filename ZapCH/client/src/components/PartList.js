import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { Card} from "react-bootstrap";
import PartItem from "./PartItem";

const PartList = observer(()=>{
    const {part} = useContext(Context)

    return(
        <Card>
            {part.parts.map(part =>
                <PartItem key={part.id} part={part}/>
                )}
        </Card>
    )
})

export default PartList

