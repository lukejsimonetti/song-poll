import React, { useContext } from 'react';
import { PollAPIContext } from '../../contexts/PollAPIContext';
import { Col, Card, ListGroup } from "react-bootstrap";

const List = props => {
    const { polls } = useContext(PollAPIContext)

    return (
        <>
            <h3>Polls</h3>
            <Col md={{ span: 8, offset: 2 }}>
                    <br/>
                    <Col md={{ span: 6, offset: 3 }}>
                        <ListGroup as="ul">
                            {polls.length > 0 ? polls.map((v, i) => {
                                return (
                                    <ListGroup.Item 
                                        action as="li" key={i} 
                                        onClick={() => props.history.push(`/poll/view/${v.slug}`)}>
                                        <h5>
                                            {v.poll_name}
                                        </h5>
                                    </ListGroup.Item>
                                )
                            }) : "No polls created yet."}
                        </ListGroup>
                    </Col>
                    <br />
            </Col>
        </>
    );
};

export default List;