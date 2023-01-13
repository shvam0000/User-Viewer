const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();

const User = require('../models/users');

router.get('/', (req, res) => {
  User.find()
    .exec()
    .then((result) => {
      console.log(res);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.post('/', (req, res) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    status: req.body.status,
    role: req.body.role,
    lastLogin: req.body.lastLogin,
  });
  user
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.patch('/:userId', (req, res) => {
  const id = req.params.userId;
  User.updateOne({ _id: id }, { $set: req.body })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.delete('/:userId', (req, res) => {
  const id = req.params.userId;
  User.deleteOne({ _id: id })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
