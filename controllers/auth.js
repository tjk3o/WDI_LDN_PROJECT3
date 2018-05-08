// In auth we create functions to allow a user to register, login, show and update their profile
const User = require('../models/user');
// jwt creates and decrypts tokens to authenticate users stored in our database
const jwt = require('jsonwebtoken');
// We have stored the secret in the config file but this would need to move into the zsh file for a production app
const { secret }  = require('../config/environment');

function register(req, res, next) {
  // Create a user using the user model to verify the form data sent in the body of the request
  User.create(req.body)
    .then(user => {
      // Create a jwt token using the users id, our secret, and an expiry
      const token = jwt.sign({ sub: user._id }, secret , { expiresIn: '6h'});
      // Send a response that can later be used for flash messaging along with the token
      res.json({
        message: 'Thank you for registering',
        token
      });
    })
    .catch(next);
}

function login(req,res,next){
  // Find a specific user in our db using the email in the body of their request
  User.findOne({ email: req.body.email })
    .then(user => {
      // if the user can't be found or their password is invalid, respond with a 401
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Sorry, your password or email was invalid!' });
      }
      // else respond with a token and a welcome back message
      const token = jwt.sign({ sub: user._id }, secret , { expiresIn: '6h'});
      res.json({
        message: `Welcome back ${ user.name }!`,
        token
      });
    })
    .catch(next);
}

// PROFILE PAGE
function show(req, res, next) {
  // A users profile page is accessed at a URL bearing their ID so that we can use this to find them
  // Find the specific user and respond with their user record
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next);
}

// UPDATE PROFILE PAGE
function update(req, res, next) {
  User.findById(req.params.id)
    // Object.assign overlays req.body onto the existing user record
    .then(user => Object.assign(user, req.body))
    // We then need to save the changes to store them
    .then(user => user.save())
    // Next we respond with the updated user record
    .then(user => res.json(user))
    .catch(next);
}

module.exports = {
  register,
  login,
  show,
  update
};
