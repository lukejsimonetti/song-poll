import React, {useContext, useEffect, useState} from 'react';
import { PollAPIContext } from '../../contexts/PollAPIContext';
import { Form, Button, ButtonGroup, Row, Col, Card, ListGroup } from "react-bootstrap";

const View = props => {
    const { getPoll } = useContext(PollAPIContext)
    const [currentPoll, setCurrentPoll] = useState([])

    useEffect(() =>{
        getPoll(props.match.params.id)
        .then(res => {
            setCurrentPoll(res.data)
        })
    }, [])

    return (
        <div>
            <ul>
                {currentPoll.length > 0 && currentPoll.items.map(v => {
                    return <li>{v}</li>
                })} 
            </ul>     
            {JSON.stringify(currentPoll.items)}
        </div>
    );
};

export default View;