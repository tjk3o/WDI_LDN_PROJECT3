// Router adds routing APIs like .get .params route etc.
const router = require('express').Router();
// auth contains functions we have created to allow a user to register, login, etc.
const auth = require('../controllers/auth');

router.post('/register', auth.register);
router.post('/login', auth.login);

router.get('/users/:id', auth.show);
router.put('/users/:id', auth.update);

// This final route catches unrecognised requests and returns a 404
router.route('/*')
  .all((req, res) => res.status(404).json({ message: 'Not found' }));


module.exports = router;
