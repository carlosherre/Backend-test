const express = require("express");
const {listByApostador, listByEvento, createApuesta, deleteApuesta, editarApuestas} = require("./controller");

const router = express.Router();

router.route("/").get(listByApostador).post(createApuesta).delete(deleteApuesta).patch(editarApuestas);
router.route("/xevento").get(listByEvento);
module.exports = router;