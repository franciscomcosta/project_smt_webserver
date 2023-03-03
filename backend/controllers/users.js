import { db } from "../db.js";

export const getUsers = (req, res) => {

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    today.toDateString()

    const string = "sensor_ambiente_1";


    const q = `SELECT * from tb_temp_humi LIMIT 60`;

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });

};

export const get = (req ,res) => {
    const SQL = "SELECT * FROM tb_temp_humi LIMIT 1"
    db.query(SQL, (Error, res))
    if (Error) console.log(Error);
    else res.send(res);
};