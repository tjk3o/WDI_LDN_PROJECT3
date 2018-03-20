PagesHomeCtrl.$inject = [];

function PagesHomeCtrl() {
  this.origin = 'St Pauls, London';
  this.destination = 'Oxford Street, London';
  this.travelMode = '';
  this.foodType = '';

  function setTravelMode(mode) {
    this.travelMode = mode;
  }
  this.setTravelMode = setTravelMode;

  // SETFOOD TYPE FUNCTION
  function setFoodType(type) {
    this.foodType = type;
    console.log('Show ' + type + ' type of restaurants');
  }
  this.setFoodType = setFoodType;


  // // SHOW/HIDE DIRECTIONS BUTTON
  // $scope.IsVisible = false;
  // $scope.ShowHide = function () {
  // //If DIV is visible it will be hidden and vice versa.
  //   $scope.IsVisible = $scope.IsVisible ? false : true;
  // };

}
export default PagesHomeCtrl;
