import React, { useContext } from 'react';
import { PollAPIContext } from '../../contexts/PollAPIContext';
import { Form, Button, ButtonGroup, Row, Col, Card, ListGroup } from "react-bootstrap";

const List = props => {
    const { polls } = useContext(PollAPIContext)
    return (
        <>
            <h3>Polls</h3>
            <Col md={{ span: 8, offset: 2 }}>
                <Card >
                    {JSON.stringify(polls)}
                    <br />
                    <br />
                    <Col md={{ span: 6, offset: 3 }}>
                        <ListGroup as="ul">
                            {polls && polls.map((v, i) => {
                                return (
                                    <ListGroup.Item action as="li" key={i} 
                                        onClick={() => props.history.push(`/poll/view/${v.slug}`)}>
                                        <h5>
                                            {v.pollName}
                                        </h5>
                                    </ListGroup.Item>
                                )
                            })}
                        </ListGroup>
                    </Col>
                    <br />
                </Card>
            </Col>
        </>
    );
};

export default List;