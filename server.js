const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.ATLAS_URI,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connected successfully');
});

app.use(express.static(path.join(__dirname,'public')));

const EmployeeRoute = require('./routes/employees');
app.use('/api/v1/employees', EmployeeRoute);

app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`);
})


