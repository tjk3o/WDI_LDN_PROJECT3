Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('craveHome', {
      url: '/',
      templateUrl: 'views/crave/home.html',
      controller: 'MainCtrl as MainCtrl'
    })
    .state('craveIndex', {
      url: '/crave',
      templateUrl: 'views/crave/index.html',
      controller: 'MainCtrl as MainCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/auth/register.html',
      controller: 'AuthRegisterCtrl as authRegister'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/auth/login.html',
      controller: 'AuthLoginCtrl as authLogin'
    });

  $urlRouterProvider.otherwise('/');
}

export default Router;
