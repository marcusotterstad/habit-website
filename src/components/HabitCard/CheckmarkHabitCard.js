import React from 'react';
import { ToggleButton } from 'react-bootstrap';
import "./HabitCard.css";


function CheckmarkHabitCard({name, goal}) {
    const sendPayload = async () => {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        return;
    };

    return (
        <div className="card">
            <h1>{name}</h1>
            <p>{goal}</p>
            <br />

            <label htmlFor="notes">Notes</label>
            <textarea className="form-control" id="notes" rows="2"></textarea>

            <ToggleButton className="text-white bg-dark" onClick={sendPayload} >Complete</ToggleButton>

        </div>
    )
}

export default CheckmarkHabitCard