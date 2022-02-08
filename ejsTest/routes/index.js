var express = require("express");

var continents = require("../public/javascripts/continents");

var router = express.Router();

// Navigation
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/continents", function (req, res, next) {
  res.render("continents", { title: "Continents", continents: continents });
});

module.exports = router;
