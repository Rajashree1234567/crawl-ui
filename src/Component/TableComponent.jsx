

import {   } from '@mui/material';
import './style.css'

export const TableComponent = ({ data, handleSort, sortConfig }) => {

    const getArrow = (key) => {

        if (sortConfig.key === key) {
            if (sortConfig.direction === 'ascending') {
              return '▲'; // Up arrow
            } else {
              return '▼'; // Down arrow
            }
          }
          return '▼';
    };


    // if (data.length === 0) {
    //     return <p>No data available. Click "Load Data" to fetch data.</p>;
    //   }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            id
                            <span onClick={() => handleSort('id')} >{getArrow('id')}</span>
                        </th>
                        <th>Symbol</th>
                        <th>ISIN</th>
                        <th>Day</th>
                        <th>Week</th>
                        <th>
                            Month
                            <span onClick={() => handleSort('month')} >{getArrow('month')}</span>    
                        </th>
                        <th>3 Months</th>
                        <th>sixMonths</th>
                        <th>
                            Year
                            <span onClick={() => handleSort('year')} >{getArrow('year')}</span>
                        </th>
                        <th>
                            5 Years
                            <span onClick={() => handleSort('fiveYears')} >{getArrow('fiveYears')}</span>
                        </th>
                        <th>Max</th>
                        <th>Weight</th>
                    </tr>
                </thead>



                <tbody>
                    {data.map((item) => {
                        if (item.length === 0) {
                            return <p>No data available. Click "Load Data" to fetch data.</p>;
                          }
                        return(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.symbol}</td>
                                <td>{item.isin}</td>
                                <td>{item.day}</td>
                                <td>{item.week}</td>
                                <td>{item.month}</td>
                                <td>{item.threeMonths}</td>
                                <td>{item.sixMonths}</td>
                                <td>{item.year}</td>
                                <td>{item.fiveYears}</td>
                                <td>{item.max}</td>
                                <td>{item.weight}</td>
                            </tr>
                        )})}
                </tbody>
            </table>
        </div>
    )
};