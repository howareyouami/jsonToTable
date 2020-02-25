import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import { makeTableString} from './helpers/makeTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div
          style={{
            width: "90%",
            overflow: "scroll",
            fontSize: "12px"
          }}
          dangerouslySetInnerHTML={{
            __html: makeTableString(data)
          }}></div>
      </header>
    </div>
  );
}

export default App;
