import React, {useState} from 'react';
import Habit from '../../features/Habit';

//style 

import { ToggleButton } from 'react-bootstrap';
import "./HabitCard.css";


function DurationHabitCard({id, name, goal}) {
    const [completed, setCompleted] = useState(false);
    const [duration, setDuration] = useState("");
    const [notes, setNotes] = useState("");

    const handleDuration = (event) => {
        const newDuration = event.target.value;
        setDuration(newDuration);
    }

    const handleNotes = (event) => {
        const newNotes = event.target.value;
        setNotes(newNotes);
    }

    const sendPayload = async () => {
        if(duration.length !== 0) {
            const today = new Date();
            const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

            const newPayload = new Habit(id, name, date, duration, notes);
            
            /*const response = await fetch('localhost:4001/habits/log', {
            
                method: 'POST', 
                mode: 'cors', 
                body: JSON.stringify(newPayload)
            })*/

            if(true) {
                setCompleted(true);
            }

            console.log(date)
            console.log(duration)
            console.log(notes)
            console.log(id)
        }
    }
    
    return (
        <div className="habit-card">
            <div className="info">
                <h2>{name}</h2>
                <p>{goal}</p>
            </div>
            <hr />
            {completed ? "Completed" : <div>
                <div>
                    <label htmlFor="minutes"> minutes:&nbsp;</label>
                    <input name= "minutes" type="number" style={{maxWidth: 80}} onChange={handleDuration} min="0" />
                </div>
                <br />
                    <label htmlFor="notes">Notes</label>
                    <textarea className="form-control" name="notes" onChange={handleNotes} rows="2"></textarea>
                    <ToggleButton className="text-white bg-dark complete-button" onClick={sendPayload} >Complete</ToggleButton>
            </div>}
        </div>
    )
}

export default DurationHabitCard