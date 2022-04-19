import React, { useEffect, useState, useRef } from "react";
import logo from './logo.svg';
import './App.css';




function App() {
  const [list, setList] = useState([]);

  const getSharePoint =() =>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ test: 'React POST Request Example' })
    };
    fetch('https://prod-12.eastasia.logic.azure.com:443/workflows/2fee037e0e8f4e92a8dc6c4791bc0ee5/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=F4mHtNB7YFMu5DQPoy8LnaxdBxqLk5Tb9_KU10aTJNs', requestOptions)
      .then(response => response.json())
      .then(data => {setList(data.value)});
    }


  useEffect(() => {
    getSharePoint()
    
}, []);
  return (
    <div className="App">
      <body>
        <table>
          <tr>
            <td>Type</td>
            <td>Email</td>
          </tr>
        {list.map(item => {
            return (<tr>
              <td>{item['LeaveType']}</td>
              <td>{item['Email']}</td>
            </tr>)
        })}
        </table>
        
      </body>
    </div>
  );
}

export default App;
