Auth.$inject = ['$authProvider'];

function Auth($authProvider) {
  $authProvider.signupUrl = '/api/register';
  $authProvider.loginUrl = '/api/login';
}

export default Auth;
