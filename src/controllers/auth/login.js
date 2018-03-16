AuthLoginCtrl.$inject = ['$auth', '$state', '$rootScope'];

function AuthLoginCtrl($auth, $state){
  this.credentials = {};

  function authenticate(provider) {
    $auth.authenticate(provider);
  }

  function handleSubmit(){
    $auth.login(this.credentials)
      .then($state.go('craveIndex'));
  }

  this.handleSubmit = handleSubmit;
  this.authenticate = authenticate;
}

export default AuthLoginCtrl;
