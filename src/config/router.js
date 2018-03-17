secureState.$inject = ['$q', '$state', '$auth'];
function secureState($q, $state, $auth){
  return new $q((resolve) => {
    if($auth.isAuthenticated()) return resolve();
    $state.go('login');
  });
}

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
    .state('authRegister', {
      url: '/register',
      templateUrl: 'views/auth/register.html',
      controller: 'AuthRegisterCtrl as authRegister'
    })
    .state('authLogin', {
      url: '/login',
      templateUrl: 'views/auth/login.html',
      controller: 'AuthLoginCtrl as authLogin'
    })
    .state('craveProfile', {
      url: '/profile',
      templateUrl: 'views/crave/profile.html',
      controller: 'MainCtrl as MainCtrl',
      resolve: { secureState }
    });

  $urlRouterProvider.otherwise('/');
}

export default Router;
