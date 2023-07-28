import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();
const app = express(); 
app.use(express.json());

 
// mongoose setup
mongoose.set('strictQuery', false);
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})   
.then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    // add data on time
    // User.insertMany(users); 
    // Post.insertMany(posts);

})
.catch((error) => console.log(`${error} did not connect`));
