const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter a title"],
        maxlength: [100, "Title cannot be more than 100 characters"],
        unique: true
    },
    city:{
        type: String,
        required: [true, "Please enter a city"],
        maxlength: [100, "City cannot be more than 100 characters"]
    },
    address:{
        type: String,
        required: [true, "Please enter an address"],
        maxlength: [255, "Address cannot be more than 100 characters"]
    },
    distance:{
        type: Number,
        required: [true, "Please enter a distance"]
    },
    price:{
        type: Number,
        required: [true, "Please enter a price"]
    },
    maxGroupSize:{
        type: Number,
        required: [true, "Please enter a maximum group size"]
    },
    desc:{
        type: String,
        required: [true, "Please enter a description"],
        maxlength: [255, "Description cannot be more than 100 characters"]
    },
    reviews:[
        {
            type: mongoose.Schema.ObjectId,
            ref: "Review"
        },
    ],
    img:{
        type: String,
        required: [true, "Please enter an image"]
    },
    category:{
        type: String,
        required: [true, "Please enter a category"],
        maxlength: [100, "Category cannot be more than 100 characters"]
    },
    featured:{
        type: Boolean,
        default: false
    },
    },
    {timestamps: true,});
    
module.exports = mongoose.model("Tour", tourSchema);
