/* global google */

// $rootscope lets you broadcast and receive information between different files
// $auth comes from Satellizer and we use it here to check a user is authentcated
// $state lets you switch to a different state/view

MainCtrl.$inject = ['$rootScope','User','$auth', '$state', '$timeout', '$scope'];

function MainCtrl($rootScope, User,$auth, $state, $timeout, $scope) {

  const vm = this;
  vm.flashMessage = null;
  vm.isAuthenticated = $auth.isAuthenticated;

  vm.formattedOrigin = '';

  $scope.class = '';
  $scope.bottomnav = '';
  $scope.chevron = '';

  // This changeClass function enables the mobile burger menu in index.html
  $scope.changeClass = function(){
    if ($scope.class === 'is-active') {
      $scope.class = '';
    } else {
      $scope.class = 'is-active';
    }
  };




  // ---- Log a user out, broadcast a flash message, and redirect them ---- //
  function logout(){
    $rootScope.$broadcast('flashMessage', {
      type: 'warning',
      content: 'Come back soon!'
    });
    $auth.logout();
    $state.go('craveIndex');
  }

  $rootScope.$on('flashMessage', (e, data) => {
    vm.flashMessage = data;
    $timeout(() => vm.flashMessage = null, 4000);
  });

  vm.logout = logout;

}


export default MainCtrl;
