const Tour = require("../models/tourModel");

const createTour = async (req, res) => {
    try {
        const tour = await Tour.create(req.body);
        res.status(201).json({ tour });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getTours = async (req, res) => {

    //for Pagination
    const page=parseInt(req.query.page) || 1;
    const limit=parseInt(req.query.limit) || 10;
    const skip=(page-1)*limit;

    console.log(page, limit, skip);

    try {
        const tours = await Tour.find({})
        .skip(skip)
        .limit(limit)
        .populate('reviews');

        res.status(200).json({ 
            count : tours.length,
            tours
         });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getTour = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id).populate('reviews');
        res.status(200).json({ tour });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updateTour = async (req, res) => {
    try {
        const tour=await Tour.findById(req.params.id);
        if(!tour) return res.status(404).json({ message: "Tour not found" });

        const updatedTour = await Tour.findByIdAndUpdate(
            req.params.id,
            req.body, 
            { new: true, runValidators: true }
        );

        res.status(200).json({ tour: updatedTour });
        
    }catch(err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteTour = async (req, res) => {
    try {
        const tour=await Tour.findById(req.params.id);
        if(!tour) return res.status(404).json({ message: "Tour not found" });
        await tour.deleteOne();

        res.status(200).json({ tour });

    }catch(err) {
        res.status(400).json({ message: err.message });
    }
}

const getTourBySearch = async (req, res) => {
    try {
        const city = new RegExp(req.query.city);
        const title = new RegExp(req.query.title);
        let distance =parseInt(req.query.distance);
        let maxGroupSize =parseInt(req.query.maxGroupSize);

        if(!distance) distance =0;
        if(!maxGroupSize) maxGroupSize= 0;

        console.log(city, title, distance, maxGroupSize);

        const tours = await Tour.find({
            title,
            city,
            distance : { $gte : distance },
            maxGroupSize : { $gte : maxGroupSize }
        }).populate('reviews');

        res.status(200).json({
            count : tours.length, 
            tours
        });
    }
    catch (err) {  
        res.status(400).json({ message: err.message });
    }
};

const getFeaturedTour= async (req, res) => {
    try {
        const tours = await Tour.find({ featured: true })
        .populate('reviews')
        .limit(8);
        res.status(200).json({
            count : tours.length,
            tours
        });       
        
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getTourCount = async (req, res) => {
    try {
        const count = await Tour.estimatedDocumentCount();
        res.status(200).json({ count });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {getTours, getTour, createTour, updateTour, deleteTour, getTourBySearch, getFeaturedTour, getTourCount};

