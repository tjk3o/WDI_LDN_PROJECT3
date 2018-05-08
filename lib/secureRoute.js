const jwt = require('jsonwebtoken');
// bluebird is a promise library that allows us to use the syntax .then()
const Promise = require('bluebird');
const User = require('../models/user');
const { secret } = require('../config/enviroment');

function secureRoute(req,res,next){
  // If the user has no authorization header in their request send a 401
  if(!req.headers.authorization) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Grab the token from their header
  const token = req.headers.authorization.replace('Bearer ', '');

  new Promise((resolve, reject ) => {
    // If the token can't be verified reject - this will be caught in the final step with a 401
    jwt.verify(token, secret , (err, payload) => {
      if(err) return reject(err);
      resolve(payload);
    });
  })
    // If the user has a verified token find them in the db
    .then(payload => User.findById(payload.sub))
    .then(user => {
      // If they can't be found reject the request else the user who made the request is the found user
      if (!user) return res.status(401).json({ message: 'Unauthorized' });
      req.currentUser = user;
      //need this to throw it to the next piece of middleware so it doesn't hang
      next();
    })
    .catch(() => res.status(401).json({ message: 'Unauthorized' }));
}

module.exports = secureRoute;
