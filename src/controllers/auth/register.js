
// $state lets you switch to a different state/view
// $auth comes from Satellizer and we use it here to check a user is authentcated
AuthRegisterCtrl.$inject = ['$auth', '$state', '$rootScope'];

function AuthRegisterCtrl($auth, $state, $rootScope){
  this.user = {};

  function handleSubmit(){
    // If the form submitted is invalid return false
    if(this.form.$invalid) return false;
    // Else sign them up, broadcast a flash message and redirect home
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
