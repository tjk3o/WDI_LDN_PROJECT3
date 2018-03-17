UserShowCtrl.$inject = ['User', '$auth', '$http'];

function UserShowCtrl(User, $auth, $http) {
  const payload = $auth.getPayload();
  const payloadSub = payload.sub;
  this.userId = payloadSub;

  User.findById(payloadSub)
    .then(res => this.userId = res.data);
  this.id = $http.get(`api/user/${this.userId}`);
  console.log(this._id);
}

export default UserShowCtrl;
