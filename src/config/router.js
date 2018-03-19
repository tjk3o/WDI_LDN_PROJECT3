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
    .state('home', {
      url: '/',
      templateUrl: 'views/pages/home.html'
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
    .state('authShow', {
      url: '/profile',
      templateUrl: 'views/auth/show.html',
      controller: 'AuthShowCtrl as authShow',
      resolve: { secureState }
    })
    .state('authEdit', {
      url: '/profile/edit',
      templateUrl: 'views/auth/edit.html',
      controller: 'AuthEditCtrl as authEdit',
      resolve: { secureState }
    });

  $urlRouterProvider.otherwise('/');
}

export default Router;
