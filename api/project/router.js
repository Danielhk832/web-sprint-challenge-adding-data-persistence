const express = require("express");
const Projects = require("./model.js");

const router = express.Router();

router.get("/", (req, res, next) => {
  Projects.getProjects()
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Projects.createProject(req.body)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch(next);
});

module.exports = router;
