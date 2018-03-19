AuthShowCtrl.$inject = ['User', '$auth'];

function AuthShowCtrl(User, $auth) {
  const payload = $auth.getPayload();

  console.log(payload.sub);

  User.findById(payload.sub)
    .then(res => {
      console.log(res.data);
      this.user = res.data;
    });
}

export default AuthShowCtrl;
