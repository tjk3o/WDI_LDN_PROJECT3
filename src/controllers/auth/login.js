// $state lets you switch to a different state/view
// $auth comes from Satellizer and we use it here to check a user is authentcated
AuthLoginCtrl.$inject = ['$auth', '$state', '$rootScope'];

function AuthLoginCtrl($auth, $state, $rootScope){
  this.credentials = {};

  function authenticate(provider) {
    $auth.authenticate(provider);
  }

  function handleSubmit(){
    // If the form submitted is invalid return false
    if(this.form.$invalid) return false;
    // Else log them in and broadcast a flash message and redirect home
    $auth.login(this.credentials)
      .then(res => {
        $rootScope.$broadcast('flashMessage', {
          type: 'success',
          content: res.data.message
        });
        $state.go('home');
      })
      // If login fails broadcast the error as a flashmessage
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
