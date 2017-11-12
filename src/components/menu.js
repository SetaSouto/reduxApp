"use strict";
import React from 'react';
import {Badge, Nav, Navbar, NavItem} from 'react-bootstrap';

class Menu extends React.Component {
    render() {
        return (
            <Navbar inverse fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Books</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/about">About</NavItem>
                        <NavItem eventKey={2} href="/contactus">Contact us</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/admin">Admin</NavItem>
                        <NavItem eventKey={2} href="/cart">Your Cart <Badge className="badge">1</Badge></NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}

export default Menu;