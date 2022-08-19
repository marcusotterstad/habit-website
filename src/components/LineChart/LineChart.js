import React from 'react';

import { useSelector } from 'react-redux';
import { selectHabitLog } from '../../features/habitLog/habitLogSlice';
import { Line } from 'react-chartjs-2';
import Chart, { registerables } from 'chart.js/auto';


function LineChart() {
    const habitLog = useSelector(selectHabitLog);

    const labelList = [];
    const durationList = [];
    for (let habit of habitLog) {
        durationList.push(habit.duration)
        labelList.push(habit.date)
    }
    if(labelList.length < 2) {
        return "";
    }
    const data = {
        labels: labelList,
        datasets: [
        {
            label: "Chart",
            data: durationList,
            fill: true,
            backgroundColor: "rgba(236, 236, 236, 0.5)"
        }]
    };
    return (<div> 
        <Line data={data} style={{maxHeight: "45vh"}} /> 
    </div>
    )
}

export default LineChart