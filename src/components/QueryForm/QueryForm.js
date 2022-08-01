import React, {useState} from 'react';
import { Form, FormGroup, FormLabel, FormSelect, FormText, Button } from 'react-bootstrap';


function QueryForm() {
    const [getBy, setGetBy] = useState("");

    const handleGetBy = (e) => {
        const newGetBy = e.target.value;
        setGetBy(newGetBy);
    }

    return (
    <div className="text-white">
        <h1>Make Queries on habit data</h1>
        <br />

        <div className="d-inline-flex">
            <FormGroup className="w-50">
                <FormLabel>Get by:</FormLabel>
                <FormSelect aria-label="Name" onChange={handleGetBy}>
                    <option>Name</option>
                    <option>Date</option>
                    <option>Duration</option>
                </FormSelect>
            </FormGroup>

            { getBy === "Name" ? "" :
            <FormGroup className="w-50">
                <FormLabel>Condition</FormLabel>
                <FormSelect aria-label="Name">
                    <option>Equals</option>
                    <option>More than</option>
                    <option>Less than</option>
                </FormSelect>
            </FormGroup> 
            }
            
            <FormGroup className="w-50" >
                <FormLabel>Input</FormLabel>
                <Form.Control type={getBy === "Name" ? "text" : getBy === "Date" ? "date" : "number"} />
                <FormText aria-label="Name">
                </FormText>
            </FormGroup>
        </div>

        <br/><br/><br/>

        <Button variant="secondary">Send Request to server</Button>

    </div>
  )
}

export default QueryForm