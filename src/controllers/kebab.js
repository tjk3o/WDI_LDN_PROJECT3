
KebabCtrl.$inject = ['$http'];
// please inject into this kebabsctrl a http module
//ajax module of jquery needed to make http requests

function KebabCtrl($http) {

  this.all = [];

  console.log('kebab controller loaded');
  $http.get('https://maps.googleapis.com/maps/api/place/textsearch/xml?query=kebabs+in+london&key=AIzaSyC8C7HRroI6BaALKHa6EHMc_BDYLIB5kUA')

    .then(res => {
      this.all = res.data.data;
      console.log(res.data.data);
    });



  this.origin = 'St Pauls, London';

  function filterKebabs(){
    //push form data into the empty object above
    console.log(this.searchData);

    $http.get(`https://maps.googleapis.com/maps/api/place/textsearch/xml?query=kebabs+in+${this.origin}&key=AIzaSyC8C7HRroI6BaALKHa6EHMc_BDYLIB5kUA`)
      .then(res => {
        this.all = res.data.data;
        console.log(res.data.data);
      });
  }

  this.filterKebabs = filterKebabs;
}

export default KebabCtrl;
