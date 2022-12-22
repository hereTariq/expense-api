const express = require('express');
const mongoose = require('mongoose');
const expenseRoutes = require('./routes/expenses');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/expense', expenseRoutes);

mongoose.set('strictQuery', false);


app.listen(PORT, async() =>
           try{
           await mongoose.connect(process.env.URI)
           }.catch(err){
               console.log('mongodb connected');
           }
    console.log('server is running on http://localhost:' + PORT)
);
