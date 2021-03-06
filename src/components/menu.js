"use strict";
import React from 'react';
import {Badge, Nav, Navbar, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Menu extends React.Component {
    render() {
        return (
            <Navbar inverse fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Books</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/about">About</NavItem>
                        <NavItem eventKey={2} href="/contactus">Contact us</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <LinkContainer to="/admin"><NavItem eventkey={1}>Admin</NavItem></LinkContainer>
                        <NavItem eventKey={2} href="/cart">Your Cart <Badge
                            className="badge">{this.countItemsInCart.bind(this)()}</Badge></NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

    countItemsInCart() {
        return this.props.cart.reduce((total, book) => total + book.quantity, 0);
    }

}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart
    }
}

export default connect(mapStateToProps)(Menu);