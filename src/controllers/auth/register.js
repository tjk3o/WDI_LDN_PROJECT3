AuthRegisterCtrl.$inject = ['$auth', '$state'];

function AuthRegisterCtrl($auth, $state){
  this.user = {};

  function handleSubmit(){
    if(this.form.$invalid) return false;
    $auth.signup(this.user)
      .then(() => $state.go('authLogin'));
  }

  this.handleSubmit = handleSubmit;
}

export default AuthRegisterCtrl;
