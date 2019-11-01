var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  console.log("test")
  burger.selectAll(function(data) {
    console.log(data);
    res.render("index", {bunObject:data});
    // res.json({data});

  });
});

router.get("/api/burgers", function(req, res) {
  console.log("test")
  burger.selectAll(function(data) {
    console.log(data);
    // res.render("index", {bunObject:data});
    res.json({data});

  });
});

router.post("/api/burgers", function(req, res) {
  console.log(req.body);
  burger.insertOne([
    "burger_name"
    // "burger_name", "devoured"
  ], [
    req.body.burger_name

    // req.body.burger_name, req.body.devoured
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: true
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
