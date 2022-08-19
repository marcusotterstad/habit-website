import React from 'react';
import { Form, FormGroup, FormLabel, FormSelect, FormText, Button } from 'react-bootstrap';


function QueryForm({handleGetBy, getBy, handleCondition, handleInput, habits, sendPayload}) {

    return (
    <div>
        <h1>Make Queries on habit data</h1>
        <br />

        <div className="d-inline-flex">
            <FormGroup className="w-50">
                <FormLabel>Get by:</FormLabel>
                <FormSelect aria-label="Name" onChange={handleGetBy}>
                    <option>name</option>
                    <option>date</option>
                    <option>duration</option>
                </FormSelect>
            </FormGroup>

            { getBy === "name" ? "" :
            <FormGroup className="w-50">
                <FormLabel>Condition</FormLabel>
                <FormSelect aria-label="Name" onChange={handleCondition}>
                    <option>equals</option>
                    <option>more-than</option>
                    <option>less-than</option>
                </FormSelect>
            </FormGroup> 
            }
            
            { getBy === "name" ?
            <FormGroup className="w-50">
                <FormLabel>Condition</FormLabel>
                <FormSelect aria-label="Name" onChange={handleInput}>
                    {habits.map(habit => <option>{habit}</option>)}
                </FormSelect>
            </FormGroup> 
            : 
            <FormGroup className="w-50" >
                <FormLabel>Input</FormLabel>
                <Form.Control onChange={handleInput} type={getBy === "name" ? "text" : getBy === "date" ? "date" : "number"} />
                <FormText aria-label="Name" >
                </FormText>
            </FormGroup>}
        </div>

        <br/>

        <Button variant="secondary" onClick={() => sendPayload()}>Send Request to server</Button>

    </div>
  )
}

export default QueryForm