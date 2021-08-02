const express = require("express");
const router = express.Router();

const {
  create,
  categoryById,
  read,
  update,
  remove,
  list,
} = require("../controllers/category");
const { requiredSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/category/:categoryId", read);
router.get("/categories", list);
router.post(
  "/category/create/:userId",
  requiredSignin,
  isAdmin,
  isAuth,
  create
);
router.put(
  "/category/:categoryId/:userId",
  requiredSignin,
  isAdmin,
  isAuth,
  update
);
router.delete(
  "/category/:categoryId/:userId",
  requiredSignin,
  isAdmin,
  isAuth,
  remove
);

router.param("userId", userById);
router.param("categoryId", categoryById);

module.exports = router;
