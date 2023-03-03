import React from "react";
import './Cards.css'

export default function (Props){

    return <div className="card--container2">
        <h1>Geladeira</h1>
        <h2 className="card--valuetemp">Temp: {Props.temp} °C</h2>
        <h2 className="card--valuehumi">Humi: {Props.humi} %</h2>
    </div>
}