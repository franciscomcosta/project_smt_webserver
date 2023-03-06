import express from "express";
import userRoutes from "./routes/users.js"
import cors from "cors";
import {db} from "./db.js"

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);

app.get("/get", (req, res)=>{
    let SQL = "SELECT id,temp_value, humi_value FROM tb_temp_humi WHERE id_sensor LIKE 'sensor_drybox' order  by id desc LIMIT 1";
    db.query(SQL, (err, result) =>{
        if (err) console.log(err);
        else res.send(result);
    })
})

app.get("/getgel", (req, res)=>{
    let SQL = "SELECT id,temp_value, humi_value FROM tb_temp_humi WHERE id_sensor LIKE 'sensor_geladeira' order  by id desc LIMIT 1";
    db.query(SQL, (err, result) =>{
        if (err) console.log(err);
        else res.send(result);
    })
})

app.get("/getamb1", (req, res)=>{
    let SQL = "SELECT id,temp_value, humi_value FROM tb_temp_humi WHERE id_sensor LIKE 'sensor_ambiente_1' order  by id desc LIMIT 1";
    db.query(SQL, (err, result) =>{
        if (err) console.log(err);
        else res.send(result);
    })
})

app.get("/getamb2", (req, res)=>{
    let SQL = "SELECT id,temp_value, humi_value FROM tb_temp_humi WHERE id_sensor LIKE 'sensor_ambiente_2' order  by id desc LIMIT 1";
    db.query(SQL, (err, result) =>{
        if (err) console.log(err);
        else res.send(result);
    })
})

app.get("/getamb3", (req, res)=>{
    let SQL = "SELECT id,temp_value, humi_value,date_time FROM tb_temp_humi WHERE id_sensor LIKE 'sensor_ambiente_3' order  by id desc LIMIT 1";
    db.query(SQL, (err, result) =>{
        if (err) console.log(err);
        else res.send(result);
    })
})

app.listen(3001, () => {
    console.log("Tudo certo!")
});