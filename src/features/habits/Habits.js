import React, {useEffect} from 'react';
import './Habits.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectHabits, fetchHabits} from './habitsSlice';

//components
import DurationHabitCard from '../../components/HabitCard/DurationHabitCard';

function Habits() {
    const dispatch = useDispatch();
    const habits = useSelector(selectHabits);
  
    const status = useSelector(state => state.habits.status);
  
    useEffect(() => {
      if (status === 'idle') {
        dispatch(fetchHabits())
      }
    }, [status, dispatch])
  
    let habitContainer = [];
    for (let habit of habits) {
        habitContainer.push(<DurationHabitCard key={habit.id} id={habit.id} name={habit.name} goal={habit.goal}  />);
    }

    return (
    <div>
        <h1>Habit Tracker App</h1>

        <div className="habitContainer">
            {habitContainer}
        </div>
        <br />
    </div>
    )
}

export default Habits;