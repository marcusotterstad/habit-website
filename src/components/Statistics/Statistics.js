import React from 'react';

//components
import HabitLog from '../../features/habitLog/HabitLog';
import QueryForm from '../QueryForm/QueryForm';

//style
import "./Statistics.css"



function Statistics() {
  return (
    <div className="statisticsContainer ">
      <div className="component1 bg-dark" ><QueryForm/></div>
      <div className="component2" ><HabitLog/></div>
      <div className="component3">

      </div>
    </div>
    
  )
}

export default Statistics