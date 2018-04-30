// mongoose allows us to use a mongodb
const mongoose = require('mongoose');
// bcrypt lets us hash and salt passwords. You can't unhash a password
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },

    home: {
      type: String
    },

    work: {
      type: String
    }

  });

// A virtual is a property on a model that is not saved in the database but calculated from another property or properties In this instance it lets us check the passwords match without storing the verification password in the db
userSchema.virtual('passwordConfirmation')
  .set(function
  setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPasswordMatch(next) {
  // If the password has been modified and doesn't match the password confirmation invalidate the request
  if(this.isModified('password') && this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'passwords do not match');
  }
  // if it passes the test move onto the next middleware (the hashPassword function)
  next();
});

userSchema.pre('save', function hashPassword(next) {
  // If the password has been modified hash and salt it
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  // if it passes the test move onto the next middleware (the hashPassword function)
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  // Compare this password to the stored password
  return bcrypt.compareSync(password, this.password);
};

userSchema.set('toJSON', {
  transform(doc, json){
    // Convert to JSON and return it without the password
    delete json.password;
    return json;
  }
});

module.exports = mongoose.model('User', userSchema);
