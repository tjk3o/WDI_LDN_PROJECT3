function PagesHomeCtrl() {
  this.origin = '';
  this.destination = '';
  this.travelMode = '';

  function setTravelMode(mode) {
    this.travelMode = mode;
  }

  this.setTravelMode = setTravelMode;
}

export default PagesHomeCtrl;
