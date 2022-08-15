import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectHabitLog, fetchHabitLog} from './habitLogSlice';
import { Table } from 'react-bootstrap';

function HabitLog() {
    const dispatch = useDispatch();
    const habitLog = useSelector(selectHabitLog);
  
    const status = useSelector(state => state.habitLog.status);
  
    useEffect(() => {
      if (status === 'idle') {
        dispatch(fetchHabitLog())
      }
    }, [status, dispatch])
    const rows = [];
    for (let row of habitLog) {
        const tableRow = (<tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.date}</td>
            <td>{row.duration}</td>
            <td>{row.notes}</td>
        </tr>)
        rows.push(tableRow)
    }
    
    return (
    <div>
        <Table stripped bordered hover variant="dark" size="sm" >
        <thead>
            <tr>
                <th width="170">Id</th>
                <th width="170">Habit</th>
                <th width="170">Date</th>
                <th width="870">Duration</th>
                <th width="1950">Notes</th>
            </tr>
        </thead>

        <tbody>
            {rows}
        </tbody>

        </Table>        
    </div>
    )
}

export default HabitLog