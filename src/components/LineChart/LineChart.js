import React from 'react';

import { useSelector } from 'react-redux';
import { selectHabitLog } from '../../features/habitLog/habitLogSlice';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


function LineChart() {
    const habitLog = useSelector(selectHabitLog);
    const labelList = [];
    const durationList = [];
    for (let habit of habitLog) {
        if(habit.name === "meditation") {
            durationList.push(habit.duration)
            labelList.push(habit.date)
        }
        
    }

    const data = {
        labels: labelList,
        datasets: [
        {
            label: 'mama',
            data: durationList,
        }]
    };
    return (<div> 
        <h1>meditation duration</h1>
        <Line data={data} style={{maxWidth: "70%", maxHeight: "30vh", alignSelf: "center"}} /> 
    </div>
    )
}

export default LineChart