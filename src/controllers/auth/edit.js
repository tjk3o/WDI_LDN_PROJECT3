// $state lets you switch to a different state/view
// $auth comes from Satellizer and we use it here to check a user is authentcated
AuthEditCtrl.$inject = ['User', '$state', '$auth'];
function AuthEditCtrl(User, $state, $auth) {

  this.user = {};
  // $auth.getPayload gets the payload from a users jwt token
  const payload = $auth.getPayload();

  // The sub of the payload is a users id so we use this to search for a user record
  User.findById(payload.sub)
    .then(res => {
      console.log(res.data);
      // Set this.user to be the data from the response
      this.user = res.data;
    });

  function handleSubmit() {
    // When a user submits the edit it updates the user record and redirects to authShow
    User.update(this.user)
      .then(() => $state.go('authShow'));
  }

  this.handleSubmit = handleSubmit;
}

export default AuthEditCtrl;
