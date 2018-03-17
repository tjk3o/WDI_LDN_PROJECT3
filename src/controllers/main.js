MainCtrl.$inject = ['User','$auth', '$state'];

function MainCtrl(User,$auth, $state) {
  this.isAuthenticated = $auth.isAuthenticated;

  function logout(){
    $auth.logout();
    $state.go('craveIndex');
  }
  this.logout = logout;
}

export default MainCtrl;
