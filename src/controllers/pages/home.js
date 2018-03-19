function PagesHomeCtrl() {
  this.origin = '';
  this.destination = '';
  this.travelMode = '';

  function walking() {
    this.travelMode = 'WALKING';
  }
  function driving() {
    this.travelMode = 'DRIVING';
  }
  
  this.walking = walking;
  this.driving = driving;
}

export default PagesHomeCtrl;
