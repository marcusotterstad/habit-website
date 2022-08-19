import React from 'react';
import { Table } from 'react-bootstrap';

function HabitLog({list}) {
    const rows = [];
    for (let row of list) {
        const tableRow = (
        <tr>
            <td>{row.date}</td>
            <td>{row.name}</td>
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