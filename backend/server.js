require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');
const mongoose = require('mongoose')

const url = process.env.MONGODB;
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true
    }).then(()=>{
        console.log('Connection Successful');
    }).catch((error)=>{     
        console.log('Something went wrong', error)
    });

app.use(cors());
app.use(bodyParser.json());


app.use(routes);
app.listen(PORT, ()=>{
    console.log(`Listening to port ${PORT}`)
})


