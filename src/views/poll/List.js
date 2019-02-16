import React, { useContext } from 'react';
import { PollAPIContext } from '../../contexts/PollAPIContext';
import { Form, Button, ButtonGroup, Row, Col, Card, ListGroup } from "react-bootstrap";

const List = props => {
    const { polls } = useContext(PollAPIContext)

    return (
        <Col md={{ span: 6, offset: 3 }}>
            <Card bg="dark">
                {JSON.stringify(polls)}
                <br />
                <br />
                <Col md={{span: 6, offset: 3}}>
                <ListGroup as="ul">
                    {polls && polls.map((v, i) => {
                        return (
                        <ListGroup.Item as="li" key={v.pollName}>
                            <h5>{v.pollName} <i className="fa fa-plus text-success"/></h5>
                        </ListGroup.Item>
                        )
                    })}
                    </ListGroup>
                </Col>
                <br />
                <Button onClick={() => props.history.push('/poll/add')}>
                    Add
            </Button>
            </Card>
        </Col>
    );
};

export default List;