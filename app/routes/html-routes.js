// DEPENDENCIES
// =============================================================
const path = require("path");

// ROUTES
// =============================================================
module.exports = function(app) {
  // GET SURVEY
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // GET HOME
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
