const env = process.env.NODE_ENV || 'dev';

const port = process.env.PORT || 4000;
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/crave-${env}`;

const secret = process.env.SECRET || 'shhh';

module.exports = {
  env, port, dbURI, secret
};




// module.exports = {
//   port: process.env.PORT || 4000,
//   dbURI: process.env.MONGODB_URI || 'mongodb://localhost/crave',
//   secret: process.env.SECRET || 'shhh'
// };
