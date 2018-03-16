AuthRegisterCtrl.$inject = ['$auth', '$state'];

function AuthRegisterCtrl(){

  function handleSubmit(){
    console.log('REGISTER');
  }

  this.handleSubmit = handleSubmit;
}

export default AuthRegisterCtrl;
