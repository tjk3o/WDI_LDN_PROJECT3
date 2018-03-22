AuthLoginCtrl.$inject = ['$auth', '$state', '$rootScope'];

function AuthLoginCtrl($auth, $state, $rootScope){
  this.credentials = {};

  function authenticate(provider) {
    $auth.authenticate(provider);
  }

  function handleSubmit(){
    if(this.form.$invalid) return false;
    $auth.login(this.credentials)
      .then(res => {
        $rootScope.$broadcast('flashMessage', {
          type: 'success',
          content: res.data.message
        });
        $state.go('home');
      })
      .catch(err => {
        // console.log('message sent', err);
        $rootScope.$broadcast('flashMessage', {
          type: 'danger',
          content: err.data.message // this is from index.js
        });
      });
  }
  this.handleSubmit = handleSubmit;
  this.authenticate = authenticate;
}

export default AuthLoginCtrl;
