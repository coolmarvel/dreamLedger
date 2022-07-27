var express = require("express");
var router = express.Router();
const { Dashboard } = require("../models");
const { Op } = require("sequelize");

router.post("/", async (req, res, next) => {
  const { block } = req.body;
  try {
    const findBlock = await Dashboard.findAll({
      attributes: ["block"],
    });

    console.log("findBlock", findBlock);

    const blockData = [];
    for (const block of findBlock) {
      blockData.push({
        block: block.block,
      });
    }
    res.json(blockData);
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

module.exports = router;
