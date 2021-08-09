const express = require("express");
const router = express.Router();

const {
  userById,
  read,
  update,
  purchaseHistory,
} = require("../controllers/user");
const { requiredSignin, isAuth, isAdmin } = require("../controllers/auth");

router.get("/secret/:userId", requiredSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile,
  });
});

router.get("/user/:userId", requiredSignin, isAuth, read);
router.put("/user/:userId", requiredSignin, isAuth, update);
router.get("/orders/by/user/:userId", requiredSignin, isAuth, purchaseHistory);

router.param("userId", userById);

module.exports = router;
