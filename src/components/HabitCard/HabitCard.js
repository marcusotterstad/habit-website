import React from 'react';
import "./HabitCard.css";

function DurationForm() {
    return (
        <div>
            <input name= "minutes" type="number" style={{maxWidth: 40}} min="0" />
            <label htmlFor="minutes">minutes</label>
            <br />
            <br />
            <button>Submit</button>
        </div>
    )
}

function CheckmarkForm() {
    return (
        <div>
            <button>Finish</button>
        </div>
    )
}

function HabitCard({name, type, goal}) {
    let CompleteForm = null;
    switch(type) {
        case "checkmark":
            CompleteForm = <CheckmarkForm />;
            break;
        case "duration":
            CompleteForm = <DurationForm />;
            break;
    }
    return (
        <div class="card">
            <h1>{name}</h1>
            <p>{goal}</p>
            <br />
            {CompleteForm}

        </div>
    )
}

export default HabitCard