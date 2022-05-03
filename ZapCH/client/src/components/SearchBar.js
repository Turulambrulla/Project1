import React, { useContext } from 'react';
import { Context } from "../index";
import Nav from "react-bootstrap/Nav";
import { Button, Col } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useHistory } from 'react-router-dom'
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
                    title="Марка"
                    menuVariant="dark"
                >
                    <Dropdown.Menu>
                        {auto.autos.map(auto =>
                            <Dropdown.Item key={auto.id}
                            >{auto.mark}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </NavDropdown>
                <NavDropdown 
                    id="nav-dropdown-dark-example"
                    title="Модель"
                    menuVariant="dark"
                >

                    <Dropdown.Menu>
                        {auto.autos.map(auto =>
                            <Dropdown.Item key={auto.id}>{auto.model}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </NavDropdown>
                <NavDropdown 
                    id="nav-dropdown-dark-example"
                    title="Год"
                    menuVariant="dark"
                >
                    <Dropdown.Menu>
                        {auto.autos.map(auto =>
                            <Dropdown.Item key={auto.id}>{auto.year}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </NavDropdown>
                <NavDropdown 
                    id="nav-dropdown-dark-example"
                    title="ДВС"
                    menuVariant="dark"
                >
                    <Dropdown.Menu>
                        {auto.autos.map(auto =>
                            <Dropdown.Item key={auto.id}>{auto.dvs}</Dropdown.Item>
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