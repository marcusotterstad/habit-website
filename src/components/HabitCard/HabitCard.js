import React from 'react';

function HabitCard({name, type, goal}) {
  return (
    <div>
        <h1>{name}</h1>
        <p>{goal}</p>
    </div>
  )
}

export default HabitCard