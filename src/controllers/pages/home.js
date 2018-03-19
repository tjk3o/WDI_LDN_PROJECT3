function PagesHomeCtrl() {
  this.origin = 'St Pauls, London';
  this.destination = 'Oxford Street, London';
  this.travelMode = '';

  function setTravelMode(mode) {
    this.travelMode = mode;
  }

  this.setTravelMode = setTravelMode;
}

export default PagesHomeCtrl;
