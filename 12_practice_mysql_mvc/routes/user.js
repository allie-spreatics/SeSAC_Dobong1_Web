// TODO: 라우트 설정
const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");
// GET /user
router.get("/", controller.main);
// GET /user/signin
router.get("/signin", controller.get_signin);
// GET /user/signup
router.get("/signup", controller.get_signup);

// POST /user/signup
router.post("/signup", controller.post_signup);
// POST /user/signin
router.post("/signin", controller.post_signin);
// POST /user/profile
router.post("/profile", controller.post_profile);
// POST /user/profile/edit
router.post("/profile/edit", controller.edit_profile);
// POST /user/profile/delete
router.post("/profile/delete", controller.delete_profile);

module.exports = router;
