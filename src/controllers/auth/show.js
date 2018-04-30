// $auth comes from Satellizer and we use it here to check a user is authentcated
AuthShowCtrl.$inject = ['User', '$auth'];

function AuthShowCtrl(User, $auth) {
  const payload = $auth.getPayload();
  // Find a user record using their payload sub (id)
  User.findById(payload.sub)
    .then(res => {
      this.user = res.data;
    });
}

export default AuthShowCtrl;
