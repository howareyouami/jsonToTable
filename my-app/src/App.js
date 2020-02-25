import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/data.json';
import { formatData } from './helpers/formatData';
import Table from './components/Table';
const formattedData = formatData(data)

function App() {
  const [lazyData, setLazyData] = useState(formattedData.slice(0, 2))
  const addLazyData = () => {
    if (lazyData.length < formattedData.length) {
      setLazyData(formattedData.slice(0, lazyData.length + 3))
    }
  }
  const buttonRef = useRef(null);

  useEffect(() => {
    window.onscroll = () => {
      if (buttonRef.current && buttonRef.current.offsetTop - window.scrollY < 2 * window.innerHeight) {
        addLazyData()
      }
    }
  })

  return (
      <div className="app-container">
        <img src={logo} className="app-logo" alt="logo" />
        {lazyData.map((i, j) => <Table data={i} j={j} key={j.toString()} />)}
        {lazyData.length < formattedData.length && <button style={{ backgroundColor: "red" }} ref={buttonRef} onClick={addLazyData} >Load More</button>}
      </div>
  );
}

export default App;
