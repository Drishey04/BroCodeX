const Review = require("../models/reviewModel");
const Tour = require("../models/tourModel");

const createReview = async (req, res) => {

    const tourId=req.params.tourId;
    const newReview=new Review({...req.body});
    try {
        const savedReview = await newReview.save();
        await Tour.findByIdAndUpdate(tourId,{
            $push:{reviews:savedReview._id}
        })
        res.status(200).json({ savedReview });
    } catch (err) {
        res.status(400).json({ message: err.message }) ;
    }
};

module.exports = {createReview};