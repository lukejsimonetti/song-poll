import React, { useContext } from 'react';
import { PollAPIContext } from '../../contexts/PollAPIContext';
import { Form, Button, ButtonGroup, Row, Col, Card, ListGroup } from "react-bootstrap";

const List = props => {
    const { polls } = useContext(PollAPIContext)

    return (
        <>
        <h3>Polls</h3>
        <Col md={{ span: 8, offset: 2 }}>
            <Card bg="dark">
                {JSON.stringify(polls)}
                <br />
                <br />
                <Col md={{span: 6, offset: 3}}>
                <ListGroup as="ul">
                    {polls && polls.map((v, i) => {
                        return (
                        <ListGroup.Item as="li" key={v.pollName}>
                            <h5>{v.pollName}
                            <Button size="sm">
                                <i className="fa fa-list-ol fa-1x" />
                            </Button>
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