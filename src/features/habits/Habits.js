import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectHabits } from './habitsSlice';
import HabitCard from '../../components/HabitCard/HabitCard';

function Habits() {
    const habits = useSelector(selectHabits);
    return (
        <div>
            <h1>Habits</h1>
            <p>{habits.map((habit) => <HabitCard name={habit.name} type={habit.type} goal={habit.goal}  />)}</p>

        </div>
    )
}

export default Habits;