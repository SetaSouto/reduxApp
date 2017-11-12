import React from 'react';
import {Button, Col, Row, Well} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart, incrementQuantity} from "../../actions/cartActions";

class BookItem extends React.Component {
    render() {
        return (
            <Well>
                <Row>
                    <Col xs={12}>
                        <h6>{this.props.title}</h6>
                        <p>{this.props.description}</p>
                        <h6>usd. {this.props.price}</h6>
                        <Button
                            onClick={this.handleCart.bind(this)}
                            bsStyle="primary">{this.cartContainsThis.bind(this)() ? "Add another one" : "Buy now"}</Button>
                    </Col>
                </Row>
            </Well>
        )
    }

    cartContainsThis() {
        return this.props.cart.findIndex((book) => book._id === this.props._id) !== -1;
    }

    handleCart() {
        return this.cartContainsThis() ?
            this.props.incrementQuantity(this.props._id) :
            this.props.addToCart({
                _id: this.props._id,
                title: this.props.title,
                description: this.props.description,
                price: this.props.price,
                quantity: 1
            });
    }
}

function mapStateToProps(state) {
    return {cart: state.cart.cart}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addToCart, incrementQuantity}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);