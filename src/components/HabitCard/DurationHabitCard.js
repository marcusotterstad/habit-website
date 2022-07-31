import React, {useState} from 'react';
import { ToggleButton } from 'react-bootstrap';
import "./HabitCard.css";

function DurationHabitCard({name, goal}) {

    const [payload, setPayload] = useState("");

    const handlepayload = (event) => {
        const newPayload = event.target.value;
        setPayload(newPayload);
        console.log(payload)
    }

    const sendPayload = async () => {
        if(payload.length > 0) {
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

            await console.log(payload)
        }
    }
    
    return (
        <div className="card">
            <div className="info">
                <h2>{name}</h2>
                <p>{goal}</p>
            </div>
            <hr />
            <div>
                <label htmlFor="minutes"> minutes:&nbsp;</label>
                <input name= "minutes" type="number" style={{maxWidth: 40}} min="0" />
            </div>
            <br />
            <br />
                <label htmlFor="notes">Notes</label>
                <textarea className="form-control" name="notes" rows="2"></textarea>


                <ToggleButton className="text-white bg-dark complete-button" onClick={sendPayload} >Complete</ToggleButton>

        </div>
    )
}

export default DurationHabitCard