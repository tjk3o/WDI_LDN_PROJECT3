AuthLoginCtrl.$inject = ['$auth', '$state', '$rootScope'];

function AuthLoginCtrl($auth, $state, $rootScope){
  this.credentials = {};

  function authenticate(provider) {
    $auth.authenticate(provider);
  }

  function handleSubmit(){
    $auth.login(this.credentials)
      .then(() => $rootScope.$broadcast('flashMessage', {
        type: 'success',
        content: 'Welcome back!'
      }))
      .then(() => $state.go('home'));
  }

  this.handleSubmit = handleSubmit;
  this.authenticate = authenticate;
}

export default AuthLoginCtrl;
