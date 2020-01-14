var mongoose = require("mongoose");
var Feedback = mongoose.Schema;

var feedback = new Feedback({
    companyName: {type: String},
    projectName: {type: String},
    willRecommend: {type: Boolean},
    rating: {type: Number},
    wentWrong: {
        complaintsMentioned: {type: Boolean},
        projectManager: {type: Boolean},
        crew: {type: Boolean},
        qualityOfWork: {type: Boolean},
        speedAndDelivery: {type: Boolean},
        pricing: {type: Boolean},
        other: {type: String}
    }
});

module.exports = mongoose.model("Feedback", feedback);