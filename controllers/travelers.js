const { json } = require("express");
const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAllTravelers = async (req, res, next) => {
  try {
    console.log("All successfully request");
    const result = await mongodb
      .getDb()
      .db("octopath")
      .collection("travelers")
      .find();
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingleTraveler = async (req, res, next) => {
  try {
    console.log("Single successfully request");
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db("octopath")
      .collection("travelers")
      .find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists[0]);
    });
  } catch (error) {
    res.status(500).json(err);
  }
};

const createTraveler1 = async (req, res) => {
  try {
    const traveler = {
      name: req.body.name,
      rarity: req.body.rarity,
      job: req.body.job,
      influence: req.body.influence,
      hp: req.body.hp,
      sp: req.body.sp,
      atk: req.body.atk,
      def: req.body.def,
      mag: req.body.mag,
      mdef: req.body.mdef,
      crit: req.body.crit,
      speed: req.body.speed
    };

    const response = await mongodb
      .getDb()
      .db("octopath")
      .collection("travelers")
      .insertOne(traveler);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error || "Some error occurred while creating the traveler."
        );
    }
  } catch (error) {
    res.status(500).json(err);
  }
};

const createTraveler = async (req, res) => {
  const traveler = {
    name: req.body.name,
    rarity: req.body.rarity,
    job: req.body.job,
    influence: req.body.influence,
    hp: req.body.hp,
    sp: req.body.sp,
    atk: req.body.atk,
    def: req.body.def,
    mag: req.body.mag,
    mdef: req.body.mdef,
    crit: req.body.crit,
    speed: req.body.speed
  };
  const response = await mongodb.getDb().db("octopath").collection('travelers').insertOne(traveler);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
};

const updateTraveler = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    // be aware of updateOne if you only want to update specific fields
    const traveler = {
      name: req.body.name,
      rarity: req.body.rarity,
      job: req.body.job,
      influence: req.body.influence,
      hp: req.body.hp,
      sp: req.body.sp,
      atk: req.body.atk,
      def: req.body.def,
      mag: req.body.mag,
      mdef: req.body.mdef,
      crit: req.body.crit,
      speed: req.body.speed
    };

    const response = await mongodb
      .getDb()
      .db("octopath")
      .collection("travelers")
      .replaceOne({ _id: userId }, traveler);
    console.log(response);
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res
        .status(500)
        .json(
          response.error || "Some error occurred while updating the traveler."
        );
    }
  } catch (error) {
    res.status(500).json(err);
  }
};

const deleteTraveler = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db("octopath")
      .collection("travelers")
      .deleteOne({ _id: userId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res
        .status(500)
        .json(
          response.error || "Some error occurred while deleting the traveler."
        );
    }
  } catch (error) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllTravelers,
  getSingleTraveler,
  createTraveler,
  updateTraveler,
  deleteTraveler,
};
