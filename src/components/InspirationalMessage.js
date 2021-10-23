import React from 'react';
import inspirationalMessages from '../Data';
import { Card } from 'react-bootstrap';

const InspirationalMessage = (props) => {

    const { inspirationalMessage, generateRandomMessage } = props;

    return(
        <Card style={{ width: '40rem' }}>
            <Card.Body>
                <h5>"{inspirationalMessage.inspirationalMessage}"</h5>
                <button className="btn_link" onClick={() => { generateRandomMessage(inspirationalMessages) }}>Generate a Message</button>
            </Card.Body>
        </Card>
    )

}

export default InspirationalMessage;