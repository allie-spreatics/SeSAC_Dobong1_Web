const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// GET /user
router.get("/", controller.user);

/* 
[예시]
GET /user/aa
router.get('/aa',controller.a);

POST /user/login
router.port('/login',controller.b)
*/

module.exports = router;
