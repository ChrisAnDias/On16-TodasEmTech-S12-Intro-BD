//Página inicial da aplicação
const express = require ("express");

const router = express.Router();

router.get("/", function (req, res) {
    res.status(200).send({
        title: "Reprograma - On16 Semana 12 - Intro - BD",
        version: "1.0.0"
    })
});

module.exports = router;