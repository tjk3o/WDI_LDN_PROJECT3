UserEditCtrl.$inject = ['User', '$state'];
function UserEditCtrl(User, $state) {

  this.user = {};
  User.findById($state.params.id)
    .then(res => this.user = res.data);

  function handleSubmit() {
    User.update(this.user)
      .then(() => $state.go('craveProfile', { id: $state.params.id }));
  }

  this.handleSubmit = handleSubmit;
}

export default UserEditCtrl;
