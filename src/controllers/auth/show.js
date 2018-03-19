AuthShowCtrl.$inject = ['User', '$auth'];

function AuthShowCtrl(User, $auth) {
  const payload = $auth.getPayload();

  User.findById(payload.sub)
    .then(res => this.user = res.data);
}

export default AuthShowCtrl;
