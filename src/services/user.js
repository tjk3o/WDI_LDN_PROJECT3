User.$inject = ['$http'];
function User($http) {
  function find() {
    // Not sure what this get request should be
    return $http.get('/api/login');
  }

  function findById(id) {
    // Not sure what this get request should be
    return $http.get(`/api/users/${id}`);
  }

  function update(user) {
    // Not sure what this get request should be
    return $http.put(`/api/users/${user._id}`, user);
  }

  this.find = find;
  this.findById = findById;
  this.update = update;
}

export default User;
