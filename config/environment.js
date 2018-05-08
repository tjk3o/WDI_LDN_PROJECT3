// Either run in heroku's node environment or in our dev environment - means we can test locally
const env = process.env.NODE_ENV || 'dev';
// the way a client program specifies a particular server program on a computer in a network
const port = process.env.PORT || 4000;
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/crave-${env}`;
// We use this secret when generating satellizer tokens. If this project was being developed for production we would hide the secret in our zsh file
const secret = process.env.SECRET || 'shhh';

module.exports = {
  env, port, dbURI, secret
};
