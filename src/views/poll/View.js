import React, {useContext} from 'react';
import { PollAPIContext } from '../../contexts/PollAPIContext';
import { Form, Button, ButtonGroup, Row, Col, Card, ListGroup } from "react-bootstrap";

const View = props => {
    const { polls } = useContext(PollAPIContext)

    return (
        <div>
        {props.match.params.id}        
        </div>
    );
};

export default View;