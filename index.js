const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const app = express();
require('dotenv').config()

const port = process.env.PORT || 5000;

//middleware
app.use(cors())
app.use(express.json())

const run = async () => {

    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zhsfr.mongodb.net/?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => {
                console.log('connection success')
            })
    }

    catch (error) {
        console.log(error)
    }

}

run().catch(console.dir)

app.get('/', async (req, res) => {
    res.send('itracker server is running')
})

app.use('/', Routes)

app.listen(port, () => {
    console.log('server is running on port', port)
})

