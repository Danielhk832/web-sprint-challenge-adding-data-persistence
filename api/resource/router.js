const express = require("express");
const Resources = require("./model");
const router = express.Router();

router.get("/", (req, res, next) => {
  Resources.getResources().then((resp) => {
    res.status(200).json(resp);
  });
});

router.post("/", (req, res, next) => {
  Resources.createResource(req.body)
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch(next);
});

module.exports = router;
