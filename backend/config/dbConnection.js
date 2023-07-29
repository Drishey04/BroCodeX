const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDb=()=>{
        mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=>{
        console.log('Connected to MongoDB');
    })
    .catch((err)=>{
    console.log('Failed to connect to MongoDB', err);
    process.exit(1);
    });
};

module.exports=connectDb;