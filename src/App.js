/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
// import GetDataComponent from './components/GetDataComponent';
import Employee from './components/Employee';
// import PutDataComponent from './components/PutDataComponent';
// import DeleteDataComponent from './components/DeleteDataComponent';
import './css/style.css';

function App() {
  return (
    <div className="app">
      <div>
        CREATE,READ,UPDATE,DELETE <i className="underline">JSON data</i> using:
      </div>
      <h1> Fetch API </h1>
      {/* <div className="btn-container">
        <button type="button">Get List</button>
      </div> */}

      <Employee />
    </div>
  );
}

export default App;
