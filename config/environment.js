module.exports = {
  port: process.env.PORT || 4000,
  dbURI: process.env.MONGODB_URI || 'mongodb://localhost/crave',
  secret: process.env.SECRET || 'shhh'
};
