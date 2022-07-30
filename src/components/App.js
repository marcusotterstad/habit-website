import React from 'react';
import Habits from '../features/habits/Habits';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Habit Tracker</h1>
      {/* <NavBar /> */}
      <Habits />
    </div>
  );
}

export default App;
