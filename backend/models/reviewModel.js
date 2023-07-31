const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    // tourId: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "Tour",
    //     required: [true, "Please enter a product id"]
    // },
    username: {
        type: String,
        required: [true, "Please enter a username"],
        maxlength: [100, "Username cannot be more than 100 characters"]
    },
    rating: {
        type: Number,
        required: [true, "Please enter a rating"],
        min: [1, "Rating must be at least 1"],
        max: [5, "Rating cannot be more than 5"],
        default: 1
    },
    comment: {
        type: String,
        required: [true, "Please enter a comment"],
        maxlength: [255, "Comment cannot be more than 255 characters"]
    },
    
}, {timestamps: true,});

module.exports = mongoose.model("Review", reviewSchema);
