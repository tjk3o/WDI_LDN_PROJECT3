// $http is used for making get requests, put requests etc.
User.$inject = ['$http'];
// This service contains functions that help us find and update users in our auth controllers
function User($http) {
  function find() {
    return $http.get('/api/login');
  }
  // Here we send a get request to find a user by their id
  function findById(id) {
    return $http.get(`/api/users/${id}`);
  }
  // For example in the edit controller we use this update function to update a users record by sending a put request
  function update(user) {
    return $http.put(`/api/users/${user._id}`, user);
  }

  this.find = find;
  this.findById = findById;
  this.update = update;
}

export default User;
