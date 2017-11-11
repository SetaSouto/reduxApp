"use strict";
import React from 'react';
import {Button, ControlLabel, FormControl, FormGroup, Panel, Well} from 'react-bootstrap';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {postBooks} from '../../actions/booksActions';

class BookForm extends React.Component {
    handleSubmit() {
        function getValue(component) {
            return ReactDOM.findDOMNode(component).value;
        }

        const books = [{
            title: getValue(this.titleComponent),
            description: getValue(this.descriptionComponent),
            price: getValue(this.priceComponent)
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
            </Well>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({postBooks}, dispatch)
}

export default connect(null, mapDispatchToProps)(BookForm);