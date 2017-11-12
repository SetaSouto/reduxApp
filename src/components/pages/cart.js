"use strict";
import React from 'react';
import {connect} from 'react-redux';
import {Panel, Col, Row, well, Button, ButtonGroup, Label, Modal} from 'react-bootstrap';
import {bindActionCreators} from 'redux'
import {deleteFromCart, incrementQuantity, decrementQuantity, getTotalAmount} from "../../actions/cartActions";

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            showingCheckoutModal: false
        }
    }

    render() {
        return this.props.cart.length ? this.renderCart() : Cart.renderEmpty();
    }

    static renderEmpty() {
        return (<div></div>)
    }

    renderCart() {
        return (
            <Panel header="Cart" bsStyle="primary">
                {this.props.cart.map(item => {
                    return (
                        <Panel key={item._id}>
                            <Row>
                                <Col xs={12} sm={6}>
                                    <h4>{item.title}</h4>
                                </Col>
                                <Col xs={12} sm={2} style={{textAlign: 'center'}}>
                                    <h4>usd. {item.price}</h4>
                                </Col>
                                <Col xs={12} sm={1} style={{textAlign: 'center'}}>
                                    <Label bsStyle="success">{item.quantity}</Label>
                                </Col>
                                <Col xs={12} sm={3} style={{textAlign: 'center'}}>
                                    <div>
                                        <ButtonGroup style={{minWidth: '30px'}}>
                                            <Button bsStyle="default"
                                                    onClick={this.props.decrementQuantity.bind(this, item._id)}>-</Button>
                                            <Button bsStyle="default"
                                                    onClick={this.props.incrementQuantity.bind(this, item._id)}>+</Button>
                                            <Button bsStyle="danger"
                                                    onClick={this.props.deleteFromCart.bind(this, item._id)}>Delete</Button>
                                        </ButtonGroup>
                                    </div>
                                </Col>
                            </Row>
                        </Panel>
                    )
                })}
                <Row>
                    <Col xs={12}>
                        <h4>Number of books: <strong>{this.getTotalQuantity()}</strong></h4>
                        <h4>
                            Total amount: $
                            <strong>{this.getTotalAmount()}</strong>
                        </h4>
                        <Button bsStyle="success" bsSize="small" onClick={this.showCheckoutModal.bind(this)}>PROCEED TO
                            CHECKOUT</Button>
                    </Col>
                </Row>
                <Modal show={this.state.showingCheckoutModal}
                       onHide={this.closeCheckoutModal.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirm purchase</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h6>Your order has been saved.</h6>
                        <p>You will receive an email confirmation.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <p className="text-center">You are purchasing {this.getTotalQuantity()} book
                            {this.getTotalQuantity() > 1 ? "s" : ""} with a total price of:
                            ${this.getTotalAmount()}</p>
                        <Button onClick={this.closeCheckoutModal.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </Panel>
        )
    }

    showCheckoutModal() {
        this.setState({showingCheckoutModal: true})
    }

    closeCheckoutModal() {
        this.setState({showingCheckoutModal: false})
    }

    getTotalAmount() {
        return this.props.cart.reduce((total, book) => total + book.price * book.quantity, 0)
    }

    getTotalQuantity() {
        return this.props.cart.reduce((total, book) => total + book.quantity, 0);
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteFromCart, incrementQuantity, decrementQuantity, getTotalAmount}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);