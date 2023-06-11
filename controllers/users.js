const { json } = require("express");
const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAllUsers = async (req, res, next) => {
  try {
    console.log("All successfully request");
    const result = await mongodb
      .getDb()
      .db("octopath")
      .collection("users")
      .find();
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json("Must use a valid user id to delete a user.");
    }
    const userId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db("octopath")
      .collection("users")
      .deleteOne({ _id: userId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(200).send();
    } else {
      res
        .status(500)
        .json(response.error || "Some error occurred while deleting the user.");
    }
  } catch (error) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllUsers,
  deleteUser
};
