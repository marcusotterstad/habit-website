import React from 'react';
import './Habits.css';

import { useSelector, useDispatch } from 'react-redux';
import { selectHabits } from './habitsSlice';
import HabitCard from '../../components/HabitCard/HabitCard';

function Habits() {
    const habits = useSelector(selectHabits);
    return (
        <div class="container">
            {habits.map((habit) => <HabitCard name={habit.name} type={habit.type} goal={habit.goal}  />)}
        </div>
    )
}

export default Habits;