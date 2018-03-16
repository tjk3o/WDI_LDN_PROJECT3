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
    .state('craveRegister', {
      url: '/register',
      templateUrl: 'views/auth/register.html',
      controller: 'MainCtrl as MainCtrl'
    })
    .state('craveLogin', {
      url: '/login',
      templateUrl: 'views/auth/login.html',
      controller: 'MainCtrl as MainCtrl'
    });

  $urlRouterProvider.otherwise('/');
}

export default Router;
