import React, { useState, useEffect } from 'react';
import { fetchData } from '../api';

const DataDisplay = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const getData = async () => {
        const fetchedData = await fetchData();
        setData(fetchedData);
      };
  
      getData();
    }, []);
  
    return (
      <div>
        <h2>Data from Django API:</h2>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default DataDisplay;
  