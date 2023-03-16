const router = require("express").Router();

const {sumar} = require ("../controllers/suma.controllers")

router.get("/sumar", sumar)

module.exports = router