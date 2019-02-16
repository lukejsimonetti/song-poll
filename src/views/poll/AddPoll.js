import React, { useContext } from 'react';
import { Form as FinalForm, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";
import { Form, Button, ButtonGroup, Row, Col, Card } from "react-bootstrap";

import { PollAPIContext } from '../../contexts/PollAPIContext';
import { AppStateContext } from '../../contexts/AppStateContext';

const AddPoll = props => {
    const {addPoll } = useContext(PollAPIContext)
    // const { isLoading, setIsLoading } = useContext(AppStateContext)

    const submit = (values) => {
        addPoll(values)
        props.history.push('/poll/list')
    }
    return (
        <Col lg={{ span: 8, offset: 2 }}>
            <Card bg="dark">
                <FinalForm
                    onSubmit={e => submit(e)}
                    keepDirtyOnReinitialize={true}
                    initialValues={{ 'items': [''] }}
                    mutators={{
                        ...arrayMutators
                    }}
                    render={({
                        form: {
                            mutators: { push, pop }
                        },
                        handleSubmit,
                        pristine,
                        invalid
                    }) => (
                            <Form onSubmit={handleSubmit}>
                                <h3>New Poll</h3>
                                <br />
                                <Row className="mb-3">
                                    <Col md={{span: 3, offset: 3}}>
                                        <Field
                                            validate={value => (value ? undefined : "Required")}
                                            name="poll_name"
                                            component="input"
                                            placeholder="Poll Name"
                                        />
                                    </Col>
                                    <Col md={{span: 3}}>
                                        <ButtonGroup>
                                            <Button
                                                variant="outline-success"
                                                size="sm"
                                                onClick={() => push("items")}
                                            >
                                                Add Item
                                        </Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <FieldArray name="items">
                                        {({ fields }) =>
                                            fields.map((name, index) => (
                                                <Col md={{span: 6, offset: 2}} key={name} className="mb-2">
                                                    <span>{index + 1}. </span>
                                                    <Field
                                                        validate={value => (value ? undefined : "Required")}
                                                        name={`${name}`}
                                                        label="Item"
                                                        component="input"
                                                        placeholder={`Item`}
                                                    />
                                                    <i className="fa fa-trash fa-1x text-danger"
                                                        style={{ paddingLeft: 4 }}
                                                        onClick={() => fields.remove(index)}
                                                    />
                                                </Col>
                                            ))
                                        }
                                    </FieldArray>
                                </Row>
                                <Row className="mb-3">
                                    <Col md={{span: 3, offset: 9}}>
                                        <ButtonGroup>
                                            <Button
                                                variant="success"
                                                size="sm"
                                                type="submit"
                                                disabled={pristine || invalid}
                                            >
                                                Create Poll
                                        </Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            </Form>
                        )}
                />
            </Card>
        </Col>
    );
};

export default AddPoll;