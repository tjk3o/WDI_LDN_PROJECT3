/* global google */
PagesHomeCtrl.$inject = ['$scope', '$auth', 'User'];

function PagesHomeCtrl($scope, $auth, User) {

  const vm = this;
  vm.origin = 'St Pauls, London';
  vm.destination = 'Oxford Street, London';
  vm.travelMode = '';

  function setTravelMode(mode) {
    vm.travelMode = mode;
  }

  //CURRENT LOCATION FUNCTION
  vm.userCurrentAddress = 'Your Current location will appear here';
  console.log(vm.userCurrentAddress);

  function userCurrentPosition(){
    //The below function locates your current position in to lat and lng variables.
    navigator.geolocation.getCurrentPosition(pos => {
      const userCurrentLat = pos.coords.latitude;
      const userCurrentLng = pos.coords.longitude;
      //The below changes them in to an object ready for convering them in to an address string
      const latLng = {lat: userCurrentLat, lng: userCurrentLng};
      //The below uses the latLng object and finds the formatted_address
      const geocoder = new google.maps.Geocoder;
      geocoder.geocode({'location': latLng}, function(results, status) {
        if (status === 'OK') {
          if (results[0]) {
            vm.userCurrentAddress = results[0].formatted_address;
            vm.origin = results[0].formatted_address;
            $scope.$apply();

            console.log('This is your current location:' + vm.userCurrentAddress);
          } else {
            console.log('No results found');
          }
        } else {
          console.log('Geocoder failed due to: ' + status);
        }
      });
      //then I need to input the origin in the the google-maps directive
    }, err => {
      console.log(err.code, err.message);
    });

    //here I want to save the lat and lng as seperate variales.
    //then I want to save them as the value in the form with an ng-m
  }
  vm.userCurrentPosition = userCurrentPosition;
  vm.setTravelMode = setTravelMode;


  //HOME LOCATION FUNCTION // I'M HEEEERRRRREEEEE!
  //abi testing getting the home address
  function pullUserHome(){
    vm.userHome = '';
    const payload = $auth.getPayload();
    User.findById(payload.sub)
      .then(output => {
        vm.userHome = output.data.home;
        vm.destination = output.data.home;
        console.log(vm.userHome);
      });
  }

  this.pullUserHome = pullUserHome;

  //*****************************************************

}

export default PagesHomeCtrl;
