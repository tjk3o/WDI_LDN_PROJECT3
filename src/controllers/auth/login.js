AuthLoginCtrl.$inject = ['$auth', '$state', '$rootScope'];

function AuthLoginCtrl(){

  function handleSubmit(){
    console.log('LOGIN BUTTON');
  }

  this.handleSubmit = handleSubmit;
}

export default AuthLoginCtrl;
