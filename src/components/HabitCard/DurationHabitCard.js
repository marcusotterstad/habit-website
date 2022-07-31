import React, {useState} from 'react';
import { ToggleButton } from 'react-bootstrap';
import "./HabitCard.css";

function DurationHabitCard({id, name, goal}) {

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
        if(true) {
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            
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
            <div>
                <label htmlFor="minutes"> minutes:&nbsp;</label>
                <input name= "minutes" type="number" style={{maxWidth: 50}} onChange={handleDuration} min="0" />
            </div>
            <br />
                <label htmlFor="notes">Notes</label>
                <textarea className="form-control" name="notes" onChange={handleNotes} rows="2"></textarea>
                <ToggleButton className="text-white bg-dark complete-button" onClick={sendPayload} >Complete</ToggleButton>

        </div>
    )
}

export default DurationHabitCard