/* global api, describe, it, expect, beforeEach */
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../../config/environment');

const userData = {
  name: 'test',
  email: 'test@test.com',
  password: 'test',
  home: 'home address test',
  work: 'work address test',
  passwordConfirmation: 'test'
};
let token;
let userId;


describe('GET /users/:id', () => {
  beforeEach(done => {
    User.remove({})
      .then(() => User.create(userData))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '5m' });
        userId = user.id;
      })
      .then(() => done());
  });


  it('should return a 200 response with a token', done => {
    api
      .put(`/api/users/${userId}`)
      .set('Authorization', `Bearer ${token}`)
      .send(userData[1])
      .expect(200, done);
  });

  it('should return the user', done => {
    api
      .put(`/api/users/${userId}`)
      .set('Authorization', `Bearer ${token}`)
      .send(userData[1])
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.body).to.include.keys([
          '_id',
          'name',
          'password',
          'home',
          'work'
        ]);
        done();
      });
  });

  it('should return the correct data', done => {
    api
      .put(`/api/users/${userId}`)
      .set('Authorization', `Bearer ${token}`)
      .send(userData[1])
      .end((err, res) => {
        expect(res.body.name).to.eq(userData.name);
        expect(res.body.email).to.eq(userData.email);
        expect(res.body.home).to.eq(userData.home);
        expect(res.body.work).to.eq(userData.work);
        done();
      });
  });
});
