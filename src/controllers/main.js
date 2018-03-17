MainCtrl.$inject = ['User','$auth', '$state'];

function MainCtrl(User,$auth, $state) {
  this.isAuthenticated = $auth.isAuthenticated;

  this.userId = '';

  console.log($auth.getPayload());
  User.findById($auth.getPayload().sub)
    .then(res => this.userId = res.data);

  function logout(){
    $auth.logout();
    $state.go('craveIndex');
  }
  this.logout = logout;
}

export default MainCtrl;
