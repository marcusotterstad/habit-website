import React from 'react';
import './Habits.css';
import { useSelector } from 'react-redux';
import { selectHabits } from './habitsSlice';
import CheckmarkHabitCard from '../../components/HabitCard/CheckmarkHabitCard';
import DurationHabitCard from '../../components/HabitCard/DurationHabitCard';
//import CompletedCard from '../../components/HabitCard/CompletedCard';

function Habits() {
    const habits = useSelector(selectHabits);
    let habitContainer = [];
    for (let habit of habits) {
        switch (habit.type) {
            case "checkmark":
                habitContainer.push(<CheckmarkHabitCard key={habit.id} id={habit.id} name={habit.name} goal={habit.goal}  />);
                break;
            
            case "duration":
                habitContainer.push(<DurationHabitCard key={habit.id} id={habit.id} name={habit.name} goal={habit.goal}  />);
                break;

            default:
                break;
        }
    }

    return (
    <div>
        <h1>Habit Tracker App</h1>

        <div class="container">
            {habitContainer}
        </div>
        <br />
    </div>
    )
}

export default Habits;