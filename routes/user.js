const express = require("express");
const router = express.Router();

const { userById, read, update } = require("../controllers/user");
const { requiredSignin, isAuth, isAdmin } = require("../controllers/auth");

router.get("/secret/:userId", requiredSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile,
  });
});

router.get("/user/:userId", requiredSignin, isAuth, read);
router.put("/user/:userId", requiredSignin, isAuth, update);

router.param("userId", userById);

module.exports = router;
