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
      travelMode: '=',
      foodType: '='
    },

    link($scope, $element) {
      const map = new google.maps.Map($element[0], {
        zoom: $scope.zoom,
        center: $scope.center,
        styles: [
          {
            'featureType': 'all',
            'elementType': 'all',
            'stylers': [
              {
                'visibility': 'on'
              }
            ]
          },
          {
            'featureType': 'all',
            'elementType': 'labels',
            'stylers': [
              {
                'visibility': 'off'
              },
              {
                'saturation': '-100'
              }
            ]
          },
          {
            'featureType': 'all',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'saturation': 36
              },
              {
                'color': '#000000'
              },
              {
                'lightness': 40
              },
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'all',
            'elementType': 'labels.text.stroke',
            'stylers': [
              {
                'visibility': 'off'
              },
              {
                'color': '#000000'
              },
              {
                'lightness': 16
              }
            ]
          },
          {
            'featureType': 'all',
            'elementType': 'labels.icon',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'administrative',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 20
              }
            ]
          },
          {
            'featureType': 'administrative',
            'elementType': 'geometry.stroke',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 17
              },
              {
                'weight': 1.2
              }
            ]
          },
          {
            'featureType': 'landscape',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 20
              }
            ]
          },
          {
            'featureType': 'landscape',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#4d6059'
              }
            ]
          },
          {
            'featureType': 'landscape',
            'elementType': 'geometry.stroke',
            'stylers': [
              {
                'color': '#4d6059'
              }
            ]
          },
          {
            'featureType': 'landscape.natural',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#4d6059'
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'geometry',
            'stylers': [
              {
                'lightness': 21
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#4d6059'
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'geometry.stroke',
            'stylers': [
              {
                'color': '#4d6059'
              }
            ]
          },
          {
            'featureType': 'road',
            'elementType': 'geometry',
            'stylers': [
              {
                'visibility': 'on'
              },
              {
                'color': '#7f8d89'
              }
            ]
          },
          {
            'featureType': 'road',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#7f8d89'
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#7f8d89'
              },
              {
                'lightness': 17
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'geometry.stroke',
            'stylers': [
              {
                'color': '#7f8d89'
              },
              {
                'lightness': 29
              },
              {
                'weight': 0.2
              }
            ]
          },
          {
            'featureType': 'road.arterial',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 18
              }
            ]
          },
          {
            'featureType': 'road.arterial',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#7f8d89'
              }
            ]
          },
          {
            'featureType': 'road.arterial',
            'elementType': 'geometry.stroke',
            'stylers': [
              {
                'color': '#7f8d89'
              }
            ]
          },
          {
            'featureType': 'road.local',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 16
              }
            ]
          },
          {
            'featureType': 'road.local',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#7f8d89'
              }
            ]
          },
          {
            'featureType': 'road.local',
            'elementType': 'geometry.stroke',
            'stylers': [
              {
                'color': '#7f8d89'
              }
            ]
          },
          {
            'featureType': 'transit',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 19
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'all',
            'stylers': [
              {
                'color': '#2b3638'
              },
              {
                'visibility': 'on'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#2b3638'
              },
              {
                'lightness': 17
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#363d47'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'geometry.stroke',
            'stylers': [
              {
                'color': '#24282b'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'labels',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'labels.text',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'labels.text.stroke',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'labels.icon',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          }
        ]
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
              keyword: $scope.foodType,
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
                // console.log(place);
                // console.log(place.photos.getUrl);
                const photo = place.photos[0].getUrl({ 'maxWidth': 250, 'maxHeight': 200 });
                // console.log(photo);
                // const photo = place[i]photos[0].getUrl({'maxWidth': 100, 'maxHeight': 100});

                const infoContent = `
                  <br/>
                  <strong>${place.name}</strong><br/>
                  Address: ${place.vicinity}<br/>
                  Rating: ${place.rating}<br/>
                  Type: ${place.types.slice(0,2)}<br/>
                  <img src="${photo}">`;

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
