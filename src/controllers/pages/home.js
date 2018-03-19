function PagesHomeCtrl() {
  this.origin = 'St Pauls, London';
  this.destination = 'Oxford Street, London';
  this.travelMode = '';

  function walking() {
    this.travelMode = 'WALKING';
  }
  function driving() {
    this.travelMode = 'DRIVING';
  }
  function clearSearch() {
    this.origin = '';
    this.destination = '';
    this.travelMode = '';
  }

  this.walking = walking;
  this.driving = driving;
  this.clearSearch = clearSearch;
}

export default PagesHomeCtrl;
