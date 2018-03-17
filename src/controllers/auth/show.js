UserShowCtrl.$inject = ['User', '$state', '$auth'];
function UserShowCtrl(User, $auth, $state) {
  this.user = {};
  console.log('UserShowCtrl loaded');
  console.log($auth, $state);
  const id = $auth.getPayload();
  console.log(id);
  User.findById($auth.getPayload().sub)
    .then(res => this.user = res.data);
}

export default UserShowCtrl;
