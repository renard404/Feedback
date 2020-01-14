var Feedback = require("../models/feedback");

exports.addFeedback = (req, res) => {

    if (!req.body) {
        return res.status(400).send({
            message: "Feedback content can not be empty"
        });
    }

    const feedback = new Feedback({
        companyName: req.body.companyName,
        projectName: req.body.projectName,
        willRecommend: req.body.willRecommend,
        rating: req.body.rating,
        wentWrong: {
            complaintsMentioned: req.body.wentWrong.complaintsMentioned,
            projectManager: req.body.wentWrong.projectManager,
            crew: req.body.wentWrong.crew,
            qualityOfWork: req.body.wentWrong.qualityOfWork,
            speedAndDelivery: req.body.wentWrong.speedAndDelivery,
            pricing: req.body.wentWrong.pricing,
            other: req.body.wentWrong.other
        }
    });

    feedback.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while adding feedback."
            });
        });
}

exports.getAllFeedbacks = (req, res) => {
    Feedback.find()
        .then(feedbacks => {
            res.send(feedbacks);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving feedbacks."
            });
        });
}

exports.getFeedback = (req, res) => {
    Feedback.findById(req.params.feedbackId)
        .then(feedback => {
            if (!feedback) {
                return res.status(404).send({
                    message: "Feedback not found with id " + req.params.feedbackId
                });
            }
            res.send(feedback);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Feedback not found with id " + req.params.feedbackId
                });
            }
            return res.status(500).send({
                message: "Error retrieving feedback with id " + req.params.feedbackId
            });
        });
}