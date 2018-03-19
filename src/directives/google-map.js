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
      directionsDisplay.setMap(map);

      $scope.$watch('center', () => map.setCenter($scope.center), true);

      $scope.$watchGroup(['origin', 'destination', 'travelMode'], displayRoute);

      function displayRoute() {
        if(!$scope.origin || !$scope.destination || !$scope.travelMode) return false;

        directionsService.route({
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
