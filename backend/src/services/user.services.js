const { User } = require("../models/user.model");
const { genPassword } = require("../utility/crypto.utility");
const { uploadFile } = require("./cloudinary.services");

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

module.exports = { registerUser };
