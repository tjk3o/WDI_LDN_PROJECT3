MainCtrl.$inject = ['$auth', '$state'];

function MainCtrl($auth, $state) {
  this.isAuthenticated = $auth.isAuthenticated;

  function logout(){
    $auth.logout();
    $state.go('craveIndex');
  }
  this.logout = logout;
}

export default MainCtrl;
