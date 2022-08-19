import React, {useState} from 'react';

//style 
import { ToggleButton } from 'react-bootstrap';
import "./HabitCard.css";


function DurationHabitCard({id, name, goal}) {
    const [completed, setCompleted] = useState(false);
    const [duration, setDuration] = useState("");
    const [notes, setNotes] = useState("");
    const [message, setMessage] = useState("");

    const handleDuration = (event) => {
        const newDuration = parseInt(event.target.value);
        setDuration(newDuration);
    }

    const handleNotes = (event) => {
        const newNotes = event.target.value;
        setNotes(newNotes);
    }

    const sendPayload = async () => {
        if(duration.length !== 0) {
            const today = new Date();
            let month = today.getMonth()+1;
            if(month < 10) {
                month = "0" + String(month);
            }
            let day = today.getDate();
            if(day < 10) {
                day = "0" + String(day);
            }
            const date = today.getFullYear()+'-'+ month +'-'+ day;

            const newPayload = {
                date: date,
                habit_id: id,
                user_id: 1,
                duration: duration,
                notes: notes
                
            };
            console.log(JSON.stringify(newPayload));
            
            const response = await fetch('/habit-log', {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                method: 'POST',
                body: JSON.stringify(newPayload)
            });

            if(response.ok) {
                setCompleted(true);
                setMessage(response.text);
            } else {
                throw(new Error("Could not send request"));
            }
        }
    }
    
    return (
        <div className="habit-card">
            <div className="info">
                <h2>{name}</h2>
                <p>{goal}</p>
            </div>
            <hr />
            {completed ? message : <div>
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