import React, { useContext } from 'react';
import { Form as FinalForm, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";
import { Form, Button, ButtonGroup, Row, Col, Card, HelpBlock } from "react-bootstrap";

import { PollAPIContext } from '../../contexts/PollAPIContext';
import { AppStateContext } from '../../contexts/AppStateContext';

const AddPoll = props => {
    const {addPoll } = useContext(PollAPIContext)

    const submit = (values) => {
        addPoll(values)
        props.history.push('/poll/list')
    }
    return (
        <>
        <h3>New Poll</h3>
        <Col lg={{ span: 8, offset: 2 }}>
            <Card >
                <br/>
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
                                                <Col md={{span: 10}} key={name} className="mb-2">
                                                    <span>#{index + 1} </span>
                                                    <Field
                                                        validate={value => (value ? undefined : "Required")}
                                                        name={`${name}.item_label`}
                                                        label="Item"
                                                        component="input"
                                                        placeholder={`Item`}
                                                        style={{marginRight: 10}}
                                                    />
                                                    <Field
                                                        name={`${name}.link`}
                                                        label="Link"
                                                        component="input"
                                                        placeholder={`Link`}
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
                                    <Col md={{span: 5, offset: 7}}>
                                            <Button
                                                variant="inverse"
                                                size="sm"
                                                onClick={() => props.history.push('/poll/list')}
                                                >
                                                Cancel
                                        </Button>
                                            <Button
                                                variant="success"
                                                size="sm"
                                                type="submit"
                                                disabled={pristine || invalid}
                                            >
                                                Create Poll
                                        </Button>
                                        <br/>
                                        <br/>
                                        <p className="text-muted" style={{fontSize: 11}}>
                                            Adding a new poll cannot be undone.
                                        </p>
                                    </Col>
                                </Row>
                            </Form>
                            
                        )}
                />
            </Card>
        </Col>
        </>
    );
};

export default AddPoll;