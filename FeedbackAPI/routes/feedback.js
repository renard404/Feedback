var express = require("express");
var router = express.Router();
var feedbackController = require("../controllers/feedbackController");

router.post("/add", feedbackController.addFeedback);
router.get("/getAllFeedbacks", feedbackController.getAllFeedbacks);
router.get("/getFeedback/:feedbackId", feedbackController.getFeedback)

module.exports = router;