AuthRegisterCtrl.$inject = ['$auth', '$state', '$rootScope'];

function AuthRegisterCtrl($auth, $state, $rootScope){
  this.user = {};

  function handleSubmit(){
    if(this.form.$invalid) return false;
    $auth.signup(this.user)
      .then(res => {
        $rootScope.$broadcast('flashMessage', {
          type: 'success',
          content: res.data.message
        });
        $state.go('home');
      })
      .then(() => $state.go('authLogin'));
  }

  this.handleSubmit = handleSubmit;
}

export default AuthRegisterCtrl;
