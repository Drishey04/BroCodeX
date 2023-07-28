const express = require('express');
const mongoose = require('mongoose');
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");

connectDb();

const app = express();

app.use(express.json());
app.use('/api/pins/', require('./routes/pinRoutes'));
app.use('/api/users/', require('./routes/userRoutes'));
app.use(errorHandler);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

