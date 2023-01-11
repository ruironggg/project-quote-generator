
import { useState } from 'react';
import './App.css';
import Axios from "axios";

function App() {

  const [ advice, setAdvice ] = useState("");

  //fetch the data from the api
  const fetchData = () => {
    Axios.get('https://api.adviceslip.com/advice').then( (res) => {
      setAdvice(res.data.slip.advice);
    });
  };

//return it
  return (
    <div className="App">
      <div className='card'>
        <h1 className='advices'> {advice} </h1>
        <button className='button' onClick={fetchData}> <span> Refresh Advice </span> </button>
      </div>
    </div>
  );

};

export default App;