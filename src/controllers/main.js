MainCtrl.$inject = ['$rootScope','User','$auth', '$state', '$timeout', '$scope'];

function MainCtrl($rootScope, User,$auth, $state, $timeout, $scope) {
  this.flashMessage = null;
  this.isAuthenticated = $auth.isAuthenticated;

  // This changeClass function enables the mobile burger menu in index.html
  $scope.class = '';

  $scope.changeClass = function(){
    if ($scope.class === 'is-active')
      $scope.class = '';
    else
      $scope.class = 'is-active';
  };
  //

  function logout(){
    $rootScope.$broadcast('flashMessage', {
      type: 'warning',
      content: 'Come back soon!'
    });
    $auth.logout();
    $state.go('craveIndex');
  }

  $rootScope.$on('flashMessage', (e, data) => {
    this.flashMessage = data;
    $timeout(() => this.flashMessage = null, 4000);
  });

  this.logout = logout;
}

export default MainCtrl;
