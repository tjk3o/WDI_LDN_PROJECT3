/* global google */
googleMap.$inject = [];
function googleMap() {

  return {
    restrict: 'E',
    template: '<div class="google-map"></div>',
    replace: true,
    scope: {
      center: '=',
      zoom: '=',
      origin: '=',
      destination: '=',
      travelMode: '='
    },

    link($scope, $element) {
      const map = new google.maps.Map($element[0], {
        zoom: $scope.zoom,
        center: $scope.center
      });
      const directionsService = new google.maps.DirectionsService();
      const directionsDisplay = new google.maps.DirectionsRenderer();
      const placesService = new google.maps.places.PlacesService(map);
      directionsDisplay.setMap(map);

      $scope.$watch('center', () => map.setCenter($scope.center), true);

      $scope.$watchGroup(['origin', 'destination', 'travelMode'], displayRoute, displayRestaurants);

      // DISPLAY ROUTE
      function displayRoute() {
        if(!$scope.origin || !$scope.destination || !$scope.travelMode) return false;

        directionsService.route({
          origin: $scope.origin,
          destination: $scope.destination,
          travelMode: $scope.travelMode
        }, (response) => {
          console.log($scope.origin);
          directionsDisplay.setDirections(response);

          //beginning
          // placesService.nearbySearch({
          //   location: response.routes[0].legs[0].end_location,
          //   radius: 100,
          //   type: ['restaurant'],
          //   openNow: true
          // }, (results) => {
          //   results.map(place => {
          //     return new google.maps.Marker({
          //       map: map,
          //       position: place.geometry.location
          //     });
          //   });
          // }); //end

          response.routes[0].legs[0].steps.map(step => {
            placesService.nearbySearch({
              location: step.start_point,
              radius: 50,
              type: ['restaurant']
            }, (results) => {
              results.map(place => {
                return new google.maps.Marker({
                  map: map,
                  position: place.geometry.location
                });
              });
            });
          });

        });
      }

      // DISPLAY RESTAURANTS
      function displayRestaurants() {
        console.log('display restaurants function');
        // infowindow = new google.maps.InfoWindow();
        // var service = new google.maps.places.PlacesService(map);
        // service.nearbySearch({
        //   location: $scope.destination,
        //   radius: 500,
        //   type: ['store']
        // }, callback);
      }

      //
      // function callback(results, status) {
      //   if (status === google.maps.places.PlacesServiceStatus.OK) {
      //     for (var i = 0; i < results.length; i++) {
      //       createMarker(results[i]);
      //     }
      //   }
      // }
      //
      // function createMarker(place) {
      //   var placeLoc = place.geometry.location;
      //   var marker = new google.maps.Marker({
      //     map: map,
      //     position: place.geometry.location
      //   });
      //
      //   google.maps.event.addListener(marker, 'click', function() {
      //     infowindow.setContent(place.name);
      //     infowindow.open(map, this);
      //   });
      // }




    }
  };
}

export default googleMap;
