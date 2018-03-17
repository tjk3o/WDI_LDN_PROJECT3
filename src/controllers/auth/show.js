UserShowCtrl.$inject = ['User', '$auth'];

function UserShowCtrl(User, $auth) {
  const payload = $auth.getPayload();
  const payloadSub = payload.sub;
  this.userId = payloadSub;
  User.findById(payloadSub)
    .then(res => this.userId = res.data);
}

export default UserShowCtrl;
