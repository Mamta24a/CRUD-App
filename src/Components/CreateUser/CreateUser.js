import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class CreateUser extends Component {
    render() {
        return (
            <div>
                <h3 className="heading">Create User</h3>

                <Form className="form">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name of user" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Form>
                        {
                            <div key={`default-radio`} className="mb-3">
                                <Form.Check
                                    type="radio"
                                    id={`default-radio`}
                                    label={`default radio`}
                                />

                                <Form.Check
                                    disabled
                                    type="radio"
                                    label={`disabled radio`}
                                    id={`disabled-default-radio`}
                                />
                            </div>
                        }
                    </Form>
                    <Button variant="secondary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default CreateUser;