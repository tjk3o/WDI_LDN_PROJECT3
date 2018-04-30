/* global google */

function googleAutoComplete() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link($scope, $element, attrs, ngModel) {
      const autocomplete = new google.maps.places.Autocomplete($element[0], {
        bounds: new google.maps.LatLngBounds(
          { lat: 51.5, lng: -0.30 }, // SW
          { lat: 51.6, lng: 0.07 }  // NE
        ),
        strictBounds: true
      });

      // We take the place from the autocomplete function above and set the value of ngModel to be the formatted address that is returned in the place object
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        ngModel.$setViewValue(place.formatted_address);
      });

    }
  };
}

export default googleAutoComplete;
