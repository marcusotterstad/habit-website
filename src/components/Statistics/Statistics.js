import React, {useState} from 'react';

//components
import HabitLog from '../../features/habitLog/HabitLog';
import LineChart from '../LineChart/LineChart';
import QueryForm from '../QueryForm/QueryForm';

//style
import "./Statistics.css"



function Statistics() {
  const [getBy, setGetBy] = useState("Name");

    const handleGetBy = (e) => {
        const newGetBy = e.target.value;
        setGetBy(newGetBy);
    }

  return (
    <div className="statisticsContainer ">
      <div className="component1 bg-dark" ><QueryForm handleGetBy={handleGetBy} getBy={getBy}/></div>
      <div className="component2" ><HabitLog/></div>
      <div className="component3">{getBy === "Name" ? <LineChart/> : <div className="bg-dark" style={{width: "50%", height: "45vh"}}></div>}</div>
    </div>
    
  )
}

export default Statistics