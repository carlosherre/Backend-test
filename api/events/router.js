const express = require("express");
const {list, createEvent, listByEstado, finalizarEvento} = require("./controller");
const {validateCreateEvent} = require("../middlewares/validator");

const router = express.Router();

router.route("/").get(list).post(validateCreateEvent, createEvent);
router.route("/estado").get(listByEstado);

module.exports = router;