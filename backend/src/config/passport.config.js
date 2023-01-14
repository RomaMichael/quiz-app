const { User } = require("../models/user.model");
const { validPassword } = require("../utility/crypto.utility");

const verifyCallback = async (username, password, cb) => {
  const user = await User.findOne({ username }).lean();
  console.log(`verify`);

  if (!user) {
    return cb(null, false);
  }

  const isValid = validPassword(password, user.hash, user.salt);
  if (!isValid) {
    console.log("Wrong credentials");
    return cb(null, false);
  }

  return cb(null, user);
};

const serialize = (user, cb) => {
  console.log("serialize");
  try {
    return cb(null, user._id);
  } catch (error) {
    return cb(error);
  }
};

const deserialize = async (userId, cb) => {
  console.log("deserialize");

  try {
    const user = await User.findById(userId);

    const { hash, salt, ...restOfUser } = user;
    return cb(null, restOfUser);
  } catch (error) {
    return cb(error);
  }
};

module.exports = { deserialize, serialize, verifyCallback };
