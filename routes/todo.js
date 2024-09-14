const router = require("express").Router();
const Todo = require("../models/Todo");

router.post("/add/todo", (req, res) => {
  const { todo } = req.body;
  const newTodo = new Todo({ todo });
  //save
  newTodo
    .save()
    .then(() => {
      console.log("Todo added successfully");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});

module.exports = router;
