const { User } = require("../../models");
const router = require("express").Router();

router.get("/", async (req, res) => {
  console.log("this is the user route");
  res.end();
});

//new user
router.post("/", async (req, res) => {
  const { username, password } = req.body;

  if ((!password, !username)) {
    return res
      .status(400)
      .json({ message: "Please provide both a username and a password." });
  }
  try {
    const newUser = await User.create({
      username,
      password,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({message:"error"});
  }
  res.end();
});

module.exports = router;
