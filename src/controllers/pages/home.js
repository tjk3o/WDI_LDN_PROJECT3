/* global google */

// $auth comes from Satellizer and we use it here to check a user is authentcated
// Scope is an object that refers to the application model. It is an execution context for expressions. Scopes are arranged in hierarchical structure which mimic the DOM structure of the application. Scopes can watch expressions and propagate events.
// The return value of calling $timeout is a promise, which will be resolved when the delay has passed and the timeout function, if provided, is executed.
PagesHomeCtrl.$inject = ['$scope', '$auth', 'User', '$timeout'];

function PagesHomeCtrl($scope, $auth, User, $timeout) {
  // vm stands for View Model but we use it for this as this is a protected word
  const vm = this;
  // We have hardcoded origin and destination as a fallback incase the user doesn't enter a location
  vm.origin = '123 Oxford St, Soho, London W1D 2LT, UK';
  vm.destination = '116 Whitechapel Rd, London E1 1JE, UK';
  vm.travelMode = '';
  // Setting the bottomnav to null means it will initially be closed when the hp loads
  vm.bottomnav = null;
  vm.foodType = null;
  vm.loading = false;
  vm.navigationStep = '0';


  //This function sets the users walking or driving travel mode
  function setTravelMode(mode) {
    vm.travelMode = mode;
    // When a user selects a travelmode the bottomnav will automatically close
    openNav();
  }
  vm.setTravelMode = setTravelMode;




  // ---- Set food type function ---- //
  function setFoodType(type) {
    // This allows us to display items related to the choice on the map but also to style the buttons so the user knows that they have selected something
    if(type === 'kebab') {
      $scope.hammered = 'chosen-emotion';
      $scope.hungover = '';
      $scope.hangry = '';
      $scope.hardworking = '';
    } else if(type === 'cafe') {
      $scope.hammered = '';
      $scope.hungover = 'chosen-emotion';
      $scope.hangry = '';
      $scope.hardworking = '';
    } else if(type === 'fastfood') {
      $scope.hammered = '';
      $scope.hungover = '';
      $scope.hangry = 'chosen-emotion';
      $scope.hardworking = '';
    } else {
      $scope.hammered = '';
      $scope.hungover = '';
      $scope.hangry = '';
      $scope.hardworking = 'chosen-emotion';
    }
    vm.foodType = type;
  }
  vm.setFoodType = setFoodType;




  // ---- Current location function ---- //
  vm.userCurrentAddress = '';
  vm.unsuccessfulLocateMessage = '';
  vm.successfulLocateMessage = '';
  //This function gets the users current position and sets it as the origin
  function userCurrentPosition(){
    openNav();
    vm.loading = true;
    //The below function locates your current position in to lat and lng variables.
    var ops = {
      timeout: 10000,
      maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(pos => {
      const userCurrentLat = pos.coords.latitude;
      const userCurrentLng = pos.coords.longitude;
      //The below changes them in to an object ready for converting them in to an address string
      const latLng = {lat: userCurrentLat, lng: userCurrentLng};
      //The below uses the latLng object and finds the formatted_address
      const geocoder = new google.maps.Geocoder;
      geocoder.geocode({'location': latLng}, function(results, status) {
        console.log('hello');
        if (status === 'OK') {
          vm.successfulLocateMessage = 'We\'ve located you!';
          openNav();
          if (results[0]) {
            vm.userCurrentAddress = results[0].formatted_address;
            vm.origin = results[0].formatted_address;
            vm.loading = false;
            $scope.$apply();
          }
        }
      });
    }, err => {
      if (err.TIMEOUT) {
        vm.loading = false;
        console.log('failed');
        openNav();
        vm.unsuccessfulLocateMessage = 'Sorry, we couldn\'t locate you this time.';
        $scope.$apply();
      }
    }, ops);
  }
  vm.userCurrentPosition = userCurrentPosition;




  // ---- Home Page nav open/close toggle function ---- //
  function openNav() {
    $scope.navigatebuttons = '';
    if ($scope.bottomnav === 'active-bottom-nav') {
      $scope.bottomnav = '';
      $scope.chevron = 'chevron-image';
      $scope.navigatebuttons = 'navigationhidden';
    } else {
      $scope.bottomnav = 'active-bottom-nav';
      $scope.navigatebuttons = 'navigationshown';
      $scope.chevron = 'chevron-image active-chevron';
    }
  }
  vm.openNav = openNav;




  // ---- Fetch user's home/work address from db ---- //
  function pullUserHomeOrWork(place){
    vm.userPlace = '';
    if (place === 'home'){
      const payload = $auth.getPayload();
      User.findById(payload.sub)
        .then(output => {
          vm.userPlace = output.data.home;
          vm.destination = output.data.home;
        });
    } else if (place === 'work') {
      const payload = $auth.getPayload();
      User.findById(payload.sub)
        .then(output => {
          vm.userPlace = output.data.work;
          vm.destination = output.data.work;
        });
    }
  }
  vm.pullUserHomeOrWork = pullUserHomeOrWork;

  // ---- Change steps in bottomnav ---- //
  function originNextStep() {
    $scope.originStep = 'navigationhidden';
    $scope.destinationStep = 'navigationshown';
    $scope.geosuccess = 'navigationhidden';
  }
  function destinationNextStep() {
    $scope.destinationStep = 'navigationhidden';
    $scope.emotionStep = 'navigationshown';
  }
  function emotionNextStep() {
    $scope.emotionStep = 'navigationhidden';
    $scope.travelStep = 'navigationshown';
  }
  vm.originNextStep = originNextStep;
  vm.destinationNextStep = destinationNextStep;
  vm.emotionNextStep = emotionNextStep;


  // ---- Bounce menu when page loads ---- //
  // $timeout is like setTimeout and is used to delay functions
  $timeout(() => vm.bottomnav = 'bottom-nav animated infinite bounce', 1500);
  $timeout(() => vm.bottomnav = 'bottom-nav', 3500);

}

export default PagesHomeCtrl;
