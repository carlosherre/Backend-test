const express = require("express");
const {list, createApuesta} = require("./controller");
const {validateCreateEvent} = require("../middlewares/validator");

const router = express.Router();

router.route("/").get(list).post(validateCreateEvent, createApuesta);

module.exports = router;