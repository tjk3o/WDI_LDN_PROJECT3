/* global google */
googleMap.$inject = ['Directions'];
function googleMap(Directions) {

  console.log('map directive loaded');

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

      $scope.$watch('center', () => map.setCenter($scope.center), true);

      $scope.$watchGroup(['origin', 'destination', 'travelMode'], displayRoute);

      function displayRoute() {
        if(!$scope.origin || !$scope.destination || !$scope.travelMode) return false;
        const directionsDisplay = new google.maps.DirectionsRenderer();
        directionsDisplay.setMap(map);

        Directions.route({
          origin: $scope.origin,
          destination: $scope.destination,
          travelMode: $scope.travelMode
        }, (response, status) => {
          console.log(response, status);
          directionsDisplay.setDirections(response);
        });
      }
    }

  };

}

export default googleMap;
