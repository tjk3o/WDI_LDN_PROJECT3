AuthEditCtrl.$inject = ['User', '$state', '$auth'];
function AuthEditCtrl(User, $state, $auth) {

  this.user = {};
  const payload = $auth.getPayload();

  User.findById(payload.sub)
    .then(res => this.user = res.data);

  function handleSubmit() {
    User.update(this.user)
      .then(() => $state.go('authShow'));
  }

  this.handleSubmit = handleSubmit;
}

export default AuthEditCtrl;
