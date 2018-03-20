MainCtrl.$inject = ['$rootScope','User','$auth', '$state', '$timeout'];

function MainCtrl($rootScope, User,$auth, $state, $timeout) {
  this.flashMessage = null;
  this.isAuthenticated = $auth.isAuthenticated;

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
