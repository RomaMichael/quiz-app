const { Notification } = require("../models/notification.model");

const updateNotification = async (id, notification) => {
  try {
    const updated = await Notification.findByIdAndUpdate(id, notification, {
      new: true,
    });
    console.log(`in function ${updated}`);
    return updated;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { updateNotification };
