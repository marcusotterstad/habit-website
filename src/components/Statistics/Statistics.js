import React from 'react';

//components
import HabitLog from '../../features/habitLog/HabitLog';
import QueryForm from '../QueryForm/QueryForm';


//style
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Statistics() {
  return (
    <div>
        <Container style={{height: "90vh"}}>
        <Row className="h-50">
            <Col><QueryForm /></Col>
            <Col><HabitLog /></Col>
        </Row>
        <Row className="h-50">
            <Col>3</Col>
            <Col>4</Col>
        </Row>
        </Container>

        
        
    </div>
    
  )
}

export default Statistics