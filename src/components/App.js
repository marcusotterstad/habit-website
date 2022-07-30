import React from 'react';
import Habits from '../features/habits/Habits';
import './App.css';

function App() {
  return (
    <div className="App">
      Habit tracker
      {/* <NavBar /> */}
      <Habits />
    </div>
  );
}

export default App;
