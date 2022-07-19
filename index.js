const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()

const port = process.env.PORT || 5000;

//middleware
app.use(cors())
app.use(express.json())

const run = async () => {


}

run().catch(console.dir)

app.get('/', async (req, res) => {
    res.send('bugtracker server is running')
})

app.listen(port, () => {
    console.log('server is running on port', port)
})

