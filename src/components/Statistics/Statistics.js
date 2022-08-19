import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectHabits, fetchHabits} from '../../features/habits/habitsSlice';
import { selectHabitLog, fetchHabitLog } from '../../features/habitLog/habitLogSlice';


//child components
import HabitLog from './HabitLog';
import LineChart from '../LineChart/LineChart';
import QueryForm from '../QueryForm/QueryForm';

//style
import "./Statistics.css"


function Statistics() {
  const [getBy, setGetBy] = useState("name");
  const [condition, setCondition] = useState("equals");
  const [input, setInput] = useState("meditation");


  // get habits
  const dispatch = useDispatch();
  const habits = useSelector(selectHabits).map(row => row.name);
  const habitLog = useSelector(selectHabitLog);

  const habitStatus = useSelector(state => state.habits.status);

  useEffect(() => {
    if (habitStatus === 'idle') {
      dispatch(fetchHabits());
    }
  }, [habitStatus, dispatch])

    const handleGetBy = (e) => {
        const newGetBy = e.target.value;
        setGetBy(newGetBy);
    }

    const handleCondition = (e) => {
      const newCondition = e.target.value;
      setCondition(newCondition);
  }

    const handleInput = (e) => {
      const newInput = e.target.value;
      setInput(newInput);
  }

  const sendPayload = async () => {
    if(getBy === "name") {
      setCondition("equals");
    }
    await dispatch(fetchHabitLog({getBy, condition, input}));
  }

  return (
    <div className="statisticsContainer bg-dark text-white">
      <div className="component1" >
        <QueryForm 
          handleGetBy={handleGetBy} getBy={getBy} 
          handleCondition={handleCondition} handleInput={handleInput} 
          habits={habits} sendPayload={sendPayload}
        />
      </div>
      <div className="component2" ><HabitLog list={habitLog}/></div>
      <div className="component3"><LineChart list={habitLog}/></div>
    </div>
    
  )
}

export default Statistics