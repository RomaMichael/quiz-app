const router = require("express").Router();
const upload = require("../config/multer.config");
const { registerUser } = require("../services/user.services");
const passport = require("passport");

router.post("/register", upload.single("avatar"), async (req, res) => {
  if (req.file) {
    const user = registerUser(req.body, req.file);
    res.json(user);
  } else {
    const user = registerUser(req.body);

    res.json(user);
  }
});

router.post("/login", passport.authenticate("local"), async (req, res) => {
  try {
    const user = req.user;

    res.status(200).json(user);
    console.log({ user });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
