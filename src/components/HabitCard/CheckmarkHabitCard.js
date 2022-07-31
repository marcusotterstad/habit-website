import React, {useState} from 'react';
import { ToggleButton } from 'react-bootstrap';
import "./HabitCard.css";


function CheckmarkHabitCard({id, name, goal}) {

    const [notes, setNotes] = useState("");

    const handleNotes = (event) => {
        const newNotes = event.target.value;
        setNotes(newNotes);
    }

    const sendPayload = async () => {
        if(true) {
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            
            console.log(date)
            console.log(notes)
            console.log(id)
        }
    }

    return (
        <div className="habit-card">
            <h1>{name}</h1>
            <p>{goal}</p>
            <hr />
            <br /><br />

            <label htmlFor="notes">Notes</label>
            <textarea className="form-control" name="notes" onChange={handleNotes} rows="2"></textarea>
            <ToggleButton className="text-white bg-dark complete-button" onClick={sendPayload} >Complete</ToggleButton>

        </div>
    )
}

export default CheckmarkHabitCard