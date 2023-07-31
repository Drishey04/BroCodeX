const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnections");
const dotenv = require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes");
const tourRoutes = require("./routes/tourRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const authRoutes = require("./routes/authRoutes");

connectDb();
const app = express();
const port = process.env.PORT || 5000;
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
    optionSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/tours", tourRoutes);
app.use("/api/v1/review", reviewRoutes);

app.use(errorHandler);

app.listen(5000, () => { 
    console.log(`Server running on ${port}`);
});