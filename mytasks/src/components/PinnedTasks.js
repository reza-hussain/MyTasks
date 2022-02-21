import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import  { Col, Row } from 'react-bootstrap';
import './PinnedTasks.css';

function PinnedTasks(){
    return(
        <div className='task'>
            <Row className='task-row'>
                <Col md='3' className='task-icon'>
                    <Row><Icon.PersonFill color={'#F8D57E'} size={'45px'}></Icon.PersonFill></Row>
                </Col>
                <Col md='9' className='task-desc'>
                    <Row><h2 style={{fontWeight:'600'}}>Task Title</h2></Row>
                    <Row><h3 style={{fontWeight:'600'}}>Task Date and Time</h3></Row>
                    <Row><h3 style={{fontWeight:'400'}}>Task Description goes here. Task description go here</h3></Row>
                </Col>
            </Row>
        </div>
    );
}

export default PinnedTasks;
