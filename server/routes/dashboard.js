var express = require("express");
var router = express.Router();
const { Dashboard } = require("../models");
const { Op } = require("sequelize");

router.get("/", async (req, res, next) => {
  try {
    const findData = await Dashboard.findAll();

    const blockData = [];

    for (const data of findData) {
      blockData.push(data.blocks);
    }

    res.send(findData);
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

module.exports = router;
