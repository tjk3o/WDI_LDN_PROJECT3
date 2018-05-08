// 'use strict';
/* global google */
googleMap.$inject = [];
function googleMap() {

  return {
    // This angular directive can now only be invoked by elements
    // E restricts to Elements, A to Attributes, C to Classes, and M to Comments
    restrict: 'E',
    template: '<div class="google-map"></div>',
    replace: true,
    // When using scope you need to tell the directive what each attribute is going to be using ‘=‘ ‘@‘, or ‘&’. Scope is an object which has to have a key that matches the attribute from the directive that we want to access in the directive. = is for Objects / arrays / numbers etc, basically any JavaScript data type. @ is for Strings only. & is for Functions only
    scope: {
      center: '=',
      zoom: '=',
      origin: '=',
      destination: '=',
      travelMode: '=',
      foodType: '='
    },
    // The link method links the directive to the dom using $scope
    link($scope, $element) {
      const map = new google.maps.Map($element[0], {
        zoom: $scope.zoom,
        center: $scope.center,
        styles: [{
          'featureType': 'all',
          'elementType': 'all',
          'stylers': [
            { 'invert_lightness': true },
            { 'saturation': 10 },
            { 'lightness': 30 },
            { 'gamma': 0.5 },
            { 'hue': '#435158'}
          ]
        }]
      });

      //We will use this to display turn by turn directions
      const directionsService = new google.maps.DirectionsService();
      const directionsDisplay = new google.maps.DirectionsRenderer();
      // We will use this to display place information on the map
      const placesService = new google.maps.places.PlacesService(map);

      const directionsShow = document.getElementById('bottom-panel');

      // We are using a custom marker when displaying restaurants on the map:
      const image = {
        url: '/assets/images/marker.gif', // url
        scaledSize: new google.maps.Size(60, 60), // scaled size
        origin: new google.maps.Point(0,0) // origin
      };

      directionsDisplay.setMap(map);

      $scope.$watch('center', () => map.setCenter($scope.center), true);
      $scope.$watchGroup(['origin', 'destination', 'travelMode'], displayRoute);

      // DISPLAY ROUTE
      function displayRoute() {
        if(!$scope.origin || !$scope.destination || !$scope.travelMode) return false;
        // Only request a route if origin, destination, and travelMode are defined
        directionsService.route({
          origin: $scope.origin,
          destination: $scope.destination,
          travelMode: $scope.travelMode
        }, (response) => {
          // Using the response call the set directions function and for each step along the route find restaurants within a radius of 50 with the specified food type. Each step refers to a step in the journey, e.g. turn left Aldgate East is a step
          directionsDisplay.setDirections(response);
          response.routes[0].legs[0].steps.map(step => {

            placesService.nearbySearch({
              location: step.start_point,
              radius: 50,
              type: ['restaurant'],
              keyword: $scope.foodType,
              openNow: true
            }, (results) => {
              // For each of the results create a new marker with our custom image
              results.map(place => {
                const marker = new google.maps.Marker({
                  map: map,
                  position: place.geometry.location,
                  icon: image
                });
                // Get a photo for the place
                const photo = place.photos[0].getUrl({ 'maxWidth': 250, 'maxHeight': 200 });
                // Get metadata for the place
                const infoContent = `
                  <br/>
                  <strong>${place.name}</strong><br/>
                  Address: ${place.vicinity}<br/>
                  Rating: ${place.rating}<br/>
                  Type: ${place.types.slice(0,2)}<br/>
                  <img src="${photo}">`;
                // Create a pop-up window on the map for the place
                const infoWindow = new google.maps.InfoWindow({
                  content: infoContent
                });
                // Open the pop-up window when a user clicks on the place marker
                google.maps.event.addListener(marker, 'click', function () {
                  infoWindow.open(map, marker);
                });

                // PRINT MAPS
                directionsDisplay.setPanel(directionsShow);

              });
            });
          });
        });
      }
    }
  };
}

export default googleMap;
