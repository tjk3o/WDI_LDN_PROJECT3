// $q is a service that helps you run functions asynchronously, and use their return values (or exceptions) when they are done processing.
// $state lets you switch to a different state/view
// $rootScope broadcasts and looks out for scope. In this case we use it to broadcast a flash message which we can pick up in another file
// $auth comes from Satellizer and we use it here to check a user is authentcated

secureState.$inject = ['$q', '$state', '$auth', '$rootScope'];
function secureState($q, $state, $auth, $rootScope){
  return new $q((resolve) => {
    if($auth.isAuthenticated()) {
      return resolve();
    } else {
      $rootScope.$broadcast('flashMessage', {
        type: 'danger',
        content: 'You need to login first!'
      });
      $state.go('authLogin');
    }
  });
}

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {

  // Below we set up the states corresponding to url routes
  $stateProvider
    .state('home', {
      // This is the url that the user lands on
      url: '/',
      // This is the view template to show
      templateUrl: 'views/pages/home.html',
      // This is the controller to use
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

  // $urlRouterProvider is used for anything else
  $urlRouterProvider.otherwise('/');
}

export default Router;
