MainCtrl.$inject = ['$rootScope','User','$auth', '$state', '$timeout'];

function MainCtrl($rootScope, User, $auth, $state, $timeout){
  const vm = this;
  vm.flashMessage = null;
  vm.isAuthenticated = $auth.isAuthenticated;

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
