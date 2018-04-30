// $authProvider comes from satellizer - it can be used for oauth
Auth.$inject = ['$authProvider'];

function Auth($authProvider) {
  $authProvider.signupUrl = '/api/register';
  $authProvider.loginUrl = '/api/login';
}

export default Auth;
