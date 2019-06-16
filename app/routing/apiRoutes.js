var survey = require("../public/survey.html");

module.exports = function(app) {
    app.get("survey", function(req, res) {
        res.json(survey);
    })
};
