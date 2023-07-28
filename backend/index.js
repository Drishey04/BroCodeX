const cors = require("cors");
const express = require('express');
const mongoose = require('mongoose');
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const { registerUser } = require("./controllers/userController");

connectDb();

const app = express();

app.use(cors("*"));
app.use(express.json());
app.use('/api/pins/', require('./routes/pinRoutes'));
app.use('/api/users/', require('./routes/userRoutes'));
app.use(errorHandler);

// var cors = require('cors')
// const { createProxyMiddleware } = require('http-proxy-middleware');
// app.use('/api', createProxyMiddleware({ 
//     target: 'http://localhost:3000/', //original url
//     changeOrigin: true, 
//     //secure: false, 
//     onProxyRes: function (proxyRes, req, res) {
//        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
//     }
// }));
app.post("/api/users/register", registerUser);
  
app.listen(5000, () => {
    console.log('Server is running on port 5000');
}); 

