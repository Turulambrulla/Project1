import React, { useContext } from 'react';
import { Context } from "../index";
import { Button, Col } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { Dropdown, NavDropdown } from "react-bootstrap";




const SearchBar = observer(() => {
    const { auto } = useContext(Context)

 
    return (

        <Container>

            <div
                className="d-flex justify-content-between">
                <Col className="mt-2">Поиск:</Col>
                <NavDropdown
                    id="nav-dropdown-dark-example"
                    title={auto.selectedAuto.auto ||"Выбор автомобиля"}

                >

                    <Dropdown.Menu>
                        {auto.autos.map(auto =>
                            <Dropdown.Item
                            onClick={() => {
                                auto.selectedAuto(auto)
                            }}
                            key={auto.id}
                            >{auto.mark} {auto.model} {auto.year} {auto.dvs}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </NavDropdown>
  

                <Button
                    style={{ color: 'balck' }}
                    variant={"outline-light"}
                    type="submit">
                    Поиск
                </Button>
            </div>

        </Container >


    );
});

export default SearchBar;