const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret }  = require('../config/environment');

function register(req, res, next) {
  User.create(req.body)
    .then(user => {
      const token = jwt.sign({ sub: user._id }, secret , { expiresIn: '6h'});
      res.json({
        message: `Thank you for registering ${ user.name }`,
        token
      });
    })
    .catch(next);
}

function login(req,res,next){
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Sorry, your password or email was invalid!' });
      }
      const token = jwt.sign({ sub: user._id }, secret , { expiresIn: '6h'});
      res.json({
        message: `Welcome back ${ user.name }!`,
        token
      });
    })
    .catch(next);
}

function show(req, res, next) {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next);
}

function update(req, res, next) {
  User.findById(req.params.id)
    .then(user => Object.assign(user, req.body))
    .then(user => user.save())
    .then(user => res.json(user))
    .catch(next);
}

module.exports = {
  register,
  login,
  show,
  update
};
