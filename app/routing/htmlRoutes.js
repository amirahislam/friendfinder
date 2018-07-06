// Routes
// =============================================================

var path = require("path");

// Basic route that sends the user first to the AJAX Page
module.exports = function(app) {
    app.get("/api/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
      });
      
      app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
}