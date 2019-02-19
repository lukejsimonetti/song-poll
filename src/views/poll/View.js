import React, { useContext, useEffect, useState } from 'react';
import { PollAPIContext } from '../../contexts/PollAPIContext';
import { Table, Button, ButtonGroup, Row, Col, Card, ListGroup } from "react-bootstrap";

const View = props => {
    const { getPoll } = useContext(PollAPIContext)
    const [currentPoll, setCurrentPoll] = useState([])

    useEffect(() => {
        if (currentPoll.length == 0) {
            getPoll(props.match.params.id)
                .then(res => {
                    setCurrentPoll(res.data)
                })
        }
    }, [])

    return (
        <Col md={{ span: 10, offset: 1 }}>
            <h3>{currentPoll.pollName}</h3>
            <Card bg="dark">
                {JSON.stringify(currentPoll)}
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Song</th>
                            <th>Link</th>
                            <th>Vote</th>
                        </tr>
                    </thead>
                    <tbody>
                        { currentPoll.items && currentPoll.items.map((v,i) => {
                            return (
                                <tr key={i}>
                                    <td><strong>{v}</strong></td>
                                    <td>www.link.com</td>
                                    <td></td>
                                </tr>
                            )
                            })
                        }
                        </tbody>
                </Table>
            </Card>
        </Col>
    );
};

export default View;