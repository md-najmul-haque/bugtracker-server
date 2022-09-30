import Routes from './routes/routes.js'
import express from 'express';
import cors from 'cors';
import connection from './DataBase/ServerDB.js'
import dotenv from 'dotenv'
import bodyParser from "body-parser";
dotenv.config()

const app = express();

const port = process.env.PORT || 5000;

//middleware
app.use(cors())
app.use(express.json())

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

connection()

app.get('/', async (req, res) => {
    res.send('itracker server is running')
})


app.use('/', Routes)

app.listen(port, () => {
    console.log('server is running on port', port)
})

