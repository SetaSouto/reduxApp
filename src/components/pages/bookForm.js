"use strict";
import React from 'react';
import {Button, ControlLabel, FormControl, FormGroup, Panel, Well} from 'react-bootstrap';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {postBooks, deleteBook} from '../../actions/booksActions';

class BookForm extends React.Component {
    static getValueFormControlComponent(component) {
        return ReactDOM.findDOMNode(component).value;
    }

    handleSubmit() {
        const books = [{
            title: BookForm.getValueFormControlComponent(this.titleComponent),
            description: BookForm.getValueFormControlComponent(this.descriptionComponent),
            price: BookForm.getValueFormControlComponent(this.priceComponent)
        }];
        this.props.postBooks(books);
    }

    render() {
        return (
            <Well>
                <Panel>
                    <FormGroup controlId="title">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter book's title"
                            ref={component => this.titleComponent = component}
                        />
                    </FormGroup>
                    <FormGroup controlId="description">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl
                            type="text-area"
                            placeholder="Enter book's description"
                            ref={component => this.descriptionComponent = component}
                        />
                    </FormGroup>
                    <FormGroup controlId="price">
                        <ControlLabel>Price</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter book's price"
                            ref={component => this.priceComponent = component}
                        />
                    </FormGroup>
                    <Button
                        onClick={this.handleSubmit.bind(this)}
                        bsStyle="primary">Save book</Button>
                </Panel>
                <Panel style={{marginTop: '25px'}}>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Select a book to delete</ControlLabel>
                        <FormControl ref={component => this.deleteComponent = component}
                                     componentClass="select" placeholder="select">
                            <option value="select">select</option>
                            {this.props.books.map((book) => <option value={book._id}
                                                                    key={book._id}>{book.title}</option>)}
                        </FormControl>
                    </FormGroup>
                    <Button onClick={this.handleDeleteBook.bind(this)} bsStyle="danger" size="small">DELETE</Button>
                </Panel>
            </Well>
        )
    }

    handleDeleteBook() {
        this.props.deleteBook(Number(BookForm.getValueFormControlComponent(this.deleteComponent)))
    }
}

function mapStateToProps(state) {
    return {
        books: state.books.books
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({postBooks, deleteBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);