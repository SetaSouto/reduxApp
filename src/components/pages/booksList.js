"use strict";
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/booksActions';
import {Col, Grid, Row} from 'react-bootstrap';

import BookItem from './bookItem';
import BookForm from './bookForm';
import Cart from './cart';

class BooksList extends React.Component {
    componentDidMount() {
        this.props.getBooks();
    }

    render() {
        return (
            <Grid style={{marginTop: "15px"}}>
                <Row>
                    <Cart/>
                </Row>
                <Row>
                    <Col xs={12} sm={6}>
                        <BookForm/>
                    </Col>
                    {this.props.books.map((book) => {
                        return (
                            <Col xs={12} sm={6} md={4} key={book._id}>
                                <BookItem
                                    _id={book._id}
                                    title={book.title}
                                    description={book.description}
                                    price={book.price}
                                />
                            </Col>
                        )
                    })}
                </Row>
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books.books
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getBooks
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);