/* global google */

function googleAutoComplete() {
  return {
    restrict: 'A',
    link($scope, $element) {
      new google.maps.places.Autocomplete($element[0]);

    }
  };
}

export default googleAutoComplete;
