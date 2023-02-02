const { User } = require("../models/user.model");
const { genPassword } = require("../utility/crypto.utility");
const { uploadFile } = require("./cloudinary.services");
const uuid4 = require("uuid4");

const registerUser = async (user, file) => {
  try {
    const { password, ...restOfUser } = user;

    const hashAndSalt = genPassword(password);

    if (file) {
      const avatar = await uploadFile(file, uuid4(), "avatars");
      const newUser = new User({
        ...hashAndSalt,
        ...restOfUser,
        avatar: { url: avatar.url, publicId: avatar.public_id },
      });
      await newUser.save();
      return newUser;
    }

    const newUser = new User({ ...hashAndSalt, ...restOfUser });
    await newUser.save();
    return newUser;
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (id, user) => {
  try {
    await User.findByIdAndUpdate(id, user, { new: true });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { registerUser, updateUser };
