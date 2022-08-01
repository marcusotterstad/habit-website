import React, {useState} from 'react';
import Habit from '../../features/Habit';

//style
import { ToggleButton } from 'react-bootstrap';
import "./HabitCard.css";


function CheckmarkHabitCard({id, name, goal}) {
    const [completed, setCompleted] = useState(false);
    const [notes, setNotes] = useState("");

    const handleNotes = (event) => {
        const newNotes = event.target.value;
        setNotes(newNotes);
    }

    const sendPayload = async () => {
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        const newPayload = new Habit(id, name, date, "", notes);
        
        /*const response = await fetch('localhost:4001/habits/log', {
        
            method: 'POST', 
            mode: 'cors', 
            body: JSON.stringify(newPayload)
        })*/

        if(true) {
            setCompleted(true);
        }

        console.log(date)
        console.log(notes)
        console.log(id)
    }

    return (
        <div className="habit-card">
            <h1>{name}</h1>
            <p>{goal}</p>
            <hr />

            {completed ? "Completed" : <div>
                <br /><br />
                <label htmlFor="notes">Notes</label>
                <textarea className="form-control" name="notes" onChange={handleNotes} rows="2"></textarea>
                <ToggleButton className="text-white bg-dark complete-button" onClick={sendPayload} >Complete</ToggleButton>
            </div>}

        </div>
    )
}

export default CheckmarkHabitCard