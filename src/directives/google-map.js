// 'use strict';
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
      // const infoWindows = [];
      // const infowindow = new google.maps.InfoWindow();
      // let marker = new google.maps.Marker;

      directionsDisplay.setMap(map);

      $scope.$watch('center', () => map.setCenter($scope.center), true);

      $scope.$watchGroup(['origin', 'destination', 'travelMode'], displayRoute);

      // DISPLAY ROUTE
      function displayRoute() {
        if(!$scope.origin || !$scope.destination || !$scope.travelMode) return false;

        directionsService.route({
          origin: $scope.origin,
          destination: $scope.destination,
          travelMode: $scope.travelMode
        }, (response) => {

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

          // beginning of this form
          // response.routes[0].legs[0].steps.map(step => {
          const steps = response.routes[0].legs[0].steps;
          const lookup = [steps[0], steps[Math.round(steps.length / 2)], steps[steps.length - 1]];
          lookup.map(step => {


            placesService.nearbySearch({
              location: step.start_point,
              radius: 50,
              type: ['restaurant'],
              openNow: true
            }, (results) => {
              results.map(place => {
                // console.log(place);


                // return new google.maps.Marker({
                const marker = new google.maps.Marker({
                  map: map,
                  position: place.geometry.location
                  // label: '⭐️'
                  // icon: image
                });  //google maps marker
                // console.log(place.photos);
                // console.log(place.photos.getUrl);
                const photo = place.photos[0].getUrl({ 'maxWidth': 250, 'maxHeight': 200 });
                console.log(photo);
                // const photo = place[i]photos[0].getUrl({'maxWidth': 100, 'maxHeight': 100});

                const infoContent = '<br/>' + '<strong>' + place.name + '</strong>' + '<br/>' + 'Address: ' + place.vicinity + '<br/>' + 'Rating: ' + place.rating + '<br/>' + 'Type: ' + place.types.slice(0,2) + '<br/><br/>' + '<img src="https://lh3.googleusercontent.com/p/AF1QipNHwMJ0jI5cVubNl5MS3kqJaWIWDLc2SJIGGCON=w250-h200-k">';

                const infoWindow = new google.maps.InfoWindow({
                  content: infoContent
                });

                google.maps.event.addListener(marker, 'click', function () {
                  infoWindow.open(map, marker);
                });
              });



              // results.map(place => {
              //   console.log(place.vicinity);
              //   const contentString = place.name;
              //   return new google.maps.InfoWindow({
              //     title: place.name,
              //     content: contentString
              //   });  //google maps marker
              //   // infoWindows.push(infowindow);
              // });


            });
          }); //end of this function

        });  //end return directionsdisplay
      }  //display route ends


    } //link scope ends
  };
}

export default googleMap;
