const express = require("express");
const router = express.Router();
const {getTours, getTour, createTour,deleteTour,updateTour,getTourBySearch,getFeaturedTour,getTourCount} = require("../controllers/tourController");
const {verifyUser, verifyAdmin} = require("../middleware/authMiddleware");

router.route("/").get(getTours).post(verifyAdmin,createTour);
router.route("/search/").get(getTourBySearch);
router.route("/search/getFeaturedTour").get(getFeaturedTour);
router.route("/search/getCount").get(getTourCount);
router.route("/:id").get(getTour).delete(verifyAdmin,deleteTour).put(verifyAdmin,updateTour);


module.exports = router;


