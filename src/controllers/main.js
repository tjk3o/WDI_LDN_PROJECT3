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
  // add in the broken down function here and refer to what I've called it on the home page view
  this.userCurrentAddress = 'Hello';
  console.log(this.userCurrentAddress);

  function userCurrentPosition(){
    //ths works below!
    // navigator.geolocation.getCurrentPosition(pos => console.log(pos.coords.latitude, pos.coords.longitude
    // ), err => console.log(err));

    //trialling something new:
    navigator.geolocation.getCurrentPosition(pos => {
      const userCurrentLat = pos.coords.latitude;
      const userCurrentLng = pos.coords.longitude;
      console.log(userCurrentLat, userCurrentLng );
      //I now need to convert the lat and long in to an origin
      const latLng = {lat: userCurrentLat, lng: userCurrentLng};
      console.log(latLng);

      const geocoder = new google.maps.Geocoder;
      geocoder.geocode({'location': latLng}, function(results, status) {
        if (status === 'OK') {
          if (results[0]) {
            this.userCurrentAddress = results[0].formatted_address;

            console.log('current address has changed to:' + this.userCurrentAddress);
          } else {
            console.log('No results found');
          }
        } else {
          console.log('Geocoder failed due to: ' + status);
        }
      });
      //then I need to input the origin in the the google-maps directive
    }, err => {
      console.warn(err.code, err.message);
    });

    //here I want to save the lat and lng as seperate variales.
    //then I want to save them as the value in the form with an ng-m
  }
  this.userCurrentPosition = userCurrentPosition;

}

export default MainCtrl;
