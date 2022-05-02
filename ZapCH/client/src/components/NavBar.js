import React, { useContext } from 'react';
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from "../utils/consts";
import { Button, Col } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useHistory } from 'react-router-dom'
import { Dropdown, NavDropdown } from "react-bootstrap";


const NavBar = observer(() => {
    const { user, part } = useContext(Context)
    const history = useHistory()
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ color: 'white' }} to={MAIN_ROUTE}>ZapCH</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{ color: 'white' }}>
            <div
                className="d-flex justify-content-between">
                <Col className="mt-2">Поиск:</Col>
                <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="Марка"
                        menuVariant="dark"
                        >
                        <Dropdown.Menu>
                            {part.autos.map(auto =>
                                <Dropdown.Item key={auto.id}
                                >{auto.mark}</Dropdown.Item>
                                )}
                        </Dropdown.Menu>
                </NavDropdown>
                <NavDropdown disabled
                        id="nav-dropdown-dark-example"
                        title="Модель"
                        menuVariant="dark"
                        >
                            
                        <Dropdown.Menu>
                            {part.autos.map(auto =>
                                <Dropdown.Item key={auto.id}>{auto.model}</Dropdown.Item>
                                )}
                        </Dropdown.Menu>
                        </NavDropdown>
                <NavDropdown disabled
                        id="nav-dropdown-dark-example"
                        title="Год"
                        menuVariant="dark"
                        >
                        <Dropdown.Menu>
                            {part.autos.map(auto =>
                                <Dropdown.Item key={auto.id}>{auto.year}</Dropdown.Item>
                                )}
                        </Dropdown.Menu>
                        </NavDropdown>
                <NavDropdown disabled
                        id="nav-dropdown-dark-example"
                        title="ДВС"
                        menuVariant="dark"
                        >
                        <Dropdown.Menu>
                            {part.autos.map(auto =>
                                <Dropdown.Item key={auto.id}>{auto.dvs}</Dropdown.Item>
                                )}
                        </Dropdown.Menu>
                </NavDropdown>

                <Button
                    style={{ color: 'white' }}
                    variant={"outline-light"}
                    type="submit">
                    Поиск
                </Button>
            </div>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;