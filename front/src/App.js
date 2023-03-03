import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from "axios";
import Cards from './components/Cards';
import Cards2 from './components/Cards2';
import Cards3 from './components/Cards3';

function App() {

  const [values, setValues] = useState ();
  const[valuedry, setvaluedry] = useState ();
  const[valuegel, setvaluegel] = useState ();
  const[valueamb1, setvalueamb1] = useState ();
  

  console.log(valuedry)

  const handleChangeValues = (value) => {
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
    
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/get")
    .then((response) => {
      setvaluedry(response.data);
    })
  }, [])

  useEffect(() => {
    Axios.get("http://localhost:3001/getgel")
    .then((response) => {
      setvaluegel(response.data);
    })
  }, [])

  useEffect(() => {
    Axios.get("http://localhost:3001/getamb1")
    .then((response) => {
      setvalueamb1(response.data);
    })
  }, [])

  const handleClickbuttom = () => {
    Axios.request("http://localhost:3001",)
  }

  return (
    <div className="App--container">
        <div className="register--container">
            <h1>
              SMD CONTROL
            </h1>
            <input type="text"name="name" 
            placeholder="Why sensor?"
            className="resgister--input"
            onChange={handleChangeValues} />
            <button className="register--button"
            onClick={() => handleClickbuttom()}>
            Search</button>
          </div>
          <div className='sensor--div'>
            <div>
              {typeof valuedry !=="undefined" &&
                valuedry.map((value) =>{
                return <Cards key={value.id} valuesen={valuedry}
                setlistsen={setvaluedry} temp={value.temp_value} 
                humi={value.humi_value}></Cards>
                })}
            </div>
            <div>
            {typeof valuegel !=="undefined" &&
                valuegel.map((value) =>{
                return <Cards2 key={value.id} valuesen={valuegel}
                setlistsen={setvaluegel} temp={value.temp_value} 
                humi={value.humi_value}></Cards2>
                })}
            </div>
            <div>
            {typeof valueamb1 !=="undefined" &&
                valueamb1.map((value) =>{
                return <Cards3 key={value.id} valuesen={valueamb1}
                setlistsen={setvalueamb1} temp={value.temp_value} 
                humi={value.humi_value}></Cards3>
                })}
            </div>
          </div>
    </div>
  );
}

export default App;
