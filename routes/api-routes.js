var db = require("../models");

module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/api/burgers", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.burgers.findAll({}).then(function(dbburgers) {
      // We have access to the burgers as an argument inside of the callback function
      res.json(dbburgers);
    });
  });

  // POST route for saving a new todo
  app.post("/api/burgers", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.burgers.create({
      text: req.body.burger_name,
    }).then(function(dbburgers) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbburgers);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  // DELETE route for deleting burge. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/burgers/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.burgers.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTodo) {
      res.json(dbburgers);
    });

  });

  // PUT route for updating burger. We can get the updated burger data from req.body
  app.put("/api/burgers", function(req, res) {

    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.burgers.update({
      burger_name: req.body.burger_name,
      devoured: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbburgers) {
      res.json(dbburgers);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });
};
