const jwt = require('jsonwebtoken');
const Promise = require('bluebird');
const User = require('../models/user');
const { secret } = require('../config/enviroment');

function secureRoute(req,res,next){
  if(!req.headers.authorization) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = req.headers.authorization.replace('Bearer ', '');

  new Promise((resolve, reject ) => {
    jwt.verify(token, secret , (err, payload) => {
      if(err) return reject(err);

      resolve(payload);
    });
  })

    .then(payload => User.findById(payload.sub))
    .then(user => {
      if (!user) return res.status(401).json({ message: 'Unauthorized' });
      req.currentUser = user;
      //need this to throw it to the next piece of middleware so it doesn't hang
      next();
    })
    .catch(() => res.status(401).json({ message: 'Unauthorized' }));
}

module.exports = secureRoute;
