const router = require("express").Router();
const upload = require("../config/multer.config");
const { registerUser, updateUser } = require("../services/user.services");
const passport = require("passport");
const { isAuth } = require("../middlewares/checkAuth.middleware");
const { User } = require("../models/user.model");

router.get("/check-auth", isAuth, (req, res) => {
  console.log("check-auth");
  try {
    const user = req.user._doc;
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

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
  console.log("login");
  try {
    const user = req.user;

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

router.put("/update-user/:id", async (req, res) => {
  const user = await updateUser(req.params.id, req.body);
  res.json(user);
});

// router.put("/update-user-notification/:id", async (req, res) => {
//   const user = await updateUser(req.params.id, req.body);
//   res.json(user);
// });

// router.put("/user-gets-like/:id", async (req, res) => {
//   const user = await updateUser(req.params.id, req.body);

//   res.json(user);
// });

router.post("/logout", (req, res) => {
  console.log("logout");
  req.logout((err) => {
    if (err) {
      res.json({ message: "Could not log out" });
    }

    res.json({ message: "You are now logged out" });
  });
});

module.exports = router;
