"use strict";
import React from 'react';
import {connect} from 'react-redux';
import {Panel, Col, Row, well, Button, ButtonGroup, Label} from 'react-bootstrap';
import {bindActionCreators} from 'redux'
import {deleteFromCart, incrementQuantity, decrementQuantity} from "../../actions/cartActions";

class Cart extends React.Component {
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
                                                    onClick={this.onDecrement.bind(this, item._id)}>-</Button>
                                            <Button bsStyle="default"
                                                    onClick={this.onIncrement.bind(this, item._id)}>+</Button>
                                            <Button bsStyle="danger"
                                                    onClick={this.onDelete.bind(this, item._id)}>Delete</Button>
                                        </ButtonGroup>
                                    </div>
                                </Col>
                            </Row>
                        </Panel>
                    )
                })}
            </Panel>
        )
    }

    onDelete(_id) {
        this.props.deleteFromCart(_id);
    }

    onIncrement(_id) {
        this.props.incrementQuantity(_id);
    }

    onDecrement(_id) {
        this.props.decrementQuantity(_id);
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteFromCart, incrementQuantity, decrementQuantity}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);