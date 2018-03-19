secureState.$inject = ['$q', '$state', '$auth', '$rootScope'];
function secureState($q, $state, $auth, $rootScope){
  return new $q((resolve) => {
    if($auth.isAuthenticated()) return resolve();
    $rootScope.$broadcast('flashMessage', {
      type: 'danger',
      content: 'You need to login first!'
    });
    $state.go('login');
  });
}

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/pages/home.html',
      controller: 'PagesHomeCtrl as pagesHome'
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
