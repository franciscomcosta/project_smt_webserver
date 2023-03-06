import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from "axios";
import Cards from './components/Cards';
import Cards2 from './components/Cards2';
import Cards3 from './components/Cards3';
import Cards4 from './components/Cards4';
import Cards5 from './components/Cards5';

function App() {

  const [values, setValues] = useState ();
  const[valuedry, setvaluedry] = useState ();
  const[valuegel, setvaluegel] = useState ();
  const[valueamb1, setvalueamb1] = useState ();
  const[valueamb2, setvalueamb2] = useState ();
  const[valueamb3, setvalueamb3] = useState ();
  

  console.log(valuedry)

  const handleChangeValues = (value) => {
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
    console.log(handleChangeValues);
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

  useEffect(() => {
    Axios.get("http://localhost:3001/getamb2")
    .then((response) => {
      setvalueamb2(response.data);
    })
  }, [])

  useEffect(() => {
    Axios.get("http://localhost:3001/getamb3")
    .then((response) => {
      setvalueamb3(response.data);
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
            
            <select type="text"name="name" 
            placeholder="Why sensor?"
            className="resgister--input"
            onChange={handleChangeValues}>
              <option value="sensor_drybox">Drybox</option>
              <option value="sensor_drybox">Geladeira</option>
              <option value="sensor_drybox">Ambiente 1</option>
              <option value="sensor_drybox">Ambiente 2</option>
              <option value="sensor_drybox">Ambiente 3</option>
            </select>
            <button className="register--button"
            onClick={() => handleClickbuttom()}>
            Search</button>
          </div>
          <div className='sensor--div2'>
              <div className='sensor--amb1'>
                {typeof valueamb1 !=="undefined" &&
                    valueamb1.map((value) =>{
                    return <Cards3 key={value.id} valuesen={valueamb1}
                    setlistsen={setvalueamb1} temp={value.temp_value} 
                    humi={value.humi_value}  time={value.date_time}></Cards3>
                    })}
                </div>
                <div className='sensor--amb2'>
                {typeof valueamb2 !=="undefined" &&
                    valueamb2.map((value) =>{
                    return <Cards4 key={value.id} valuesen={valueamb2}
                    setlistsen={setvalueamb2} temp={value.temp_value} 
                    humi={value.humi_value}></Cards4>
                    })}
                </div>
                <div className='sensor--amb3'>
                {typeof valueamb3 !=="undefined" &&
                    valueamb3.map((value) =>{
                    return <Cards5 key={value.id} valuesen={valueamb3}
                    setlistsen={setvalueamb3} temp={value.temp_value} 
                    humi={value.humi_value}></Cards5>
                    })}
                </div>
          </div>
          <div className='sensor--div'>
              <div className='sensor--dry'>
                {typeof valuedry !=="undefined" &&
                  valuedry.map((value) =>{
                  return <Cards key={value.id} valuesen={valuedry}
                  setlistsen={setvaluedry} temp={value.temp_value} 
                  humi={value.humi_value}></Cards>
                  })}
              </div>
              <div className='sendor--gel'>
              {typeof valuegel !=="undefined" &&
                  valuegel.map((value) =>{
                  return <Cards2 key={value.id} valuesen={valuegel}
                  setlistsen={setvaluegel} temp={value.temp_value} 
                  humi={value.humi_value}></Cards2>
                  })}
              </div>
          </div>
            
    </div>
  );
}

export default App;
