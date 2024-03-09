

import Users from '../Users.model.js';

export const getusersSidebar = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const allUsers = await Users.find({ _id: { $ne: loggedInUser } }).select(
      "-password"
    );
    res.status(200).json(allUsers);
  } catch (error) {
    console.log("error in getusersSidebar", error.message);
  }
};
