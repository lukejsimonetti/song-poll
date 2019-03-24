import React, { useContext, useEffect, useState } from 'react';
import { PollAPIContext } from '../../contexts/PollAPIContext';
import { Table, Button, ButtonGroup, Row, Col, Card, ListGroup } from "react-bootstrap";
import axios from 'axios';

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

    const vote = (songID) => {
        axios.post('/api/vote', {songID, slugID: currentPoll.slug})
        .then((res) => {
            setCurrentPoll(res.data)
        })
    }

    const caps = (x) => {
        return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
    }

    return (
        <Col md={{ span: 10, offset: 1 }}>
            <h3>{currentPoll.pollName}</h3>
            <Card >
                {JSON.stringify(currentPoll)}
                <Table striped hover>
                    <thead>
                        <tr>
                            <th style={{width: 350, maxWidth: 250}} >Song</th>
                            <th style={{width: 150}} ></th>
                            <th>Vote</th>
                            <th>Votes</th>
                        </tr>
                    </thead>
                    <tbody>
                        { currentPoll.items && currentPoll.items.map((v,i) => {
                            return (
                                <tr key={i}>
                                    <td style={{
                                        overflow: 'hidden',    
                                    }}>
                                        <strong>{v.item_label}</strong>
                                    </td>
                                    <td>
                                        <a href={`${v.link}`} target="_blank">
                                            <strong><i className="fa fa-link"/> Video Link</strong>
                                        </a>
                                    </td>
                                    <td>
                                        <Button onClick={() => vote(v.id)} variant="success" size="sm">
                                            <i className="fa fa-thumbs-up"/>
                                        </Button>
                                    </td>
                                    <td>
                                        {v.users_vote.map((v,i) => {
                                            if(v.users_vote && v.users_vote.length === i){
                                                return ", " + caps(v)
                                            }
                                            if(i === 0){
                                                return caps(v)
                                            }
                                            return ", " + caps(v)
                                        })}
                                    </td>
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