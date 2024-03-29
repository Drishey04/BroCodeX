const express = require("express");
const router = express.Router();
const { createReview } = require("../controllers/reviewController");
const { verifyUser} = require("../middleware/authMiddleware");

router.post("/:tourId",verifyUser,createReview);

module.exports = router;
