import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/data.json';
import { formatData } from './helpers/formatData';
import Table from './components/Table';

function App() {
  const formattedData = formatData(data)  
  console.log(formattedData)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {formattedData.map((i) => <Table data={i} />)}
      </header>
    </div>
  );
}

export default App;
