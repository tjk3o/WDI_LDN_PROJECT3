import angular from 'angular';
import '@uirouter/angularjs';
import Router from './config/router';

// Controllers
import MainCtrl from './controllers/main';
import AuthRegisterCtrl from './controllers/auth/register';
import AuthLoginCtrl from './controllers/auth/login';

// Styling
import 'bulma';
import './assets/scss/style.scss';

import googleMap from './directives/google-map';

angular
  .module('crave',['ui.router'])
  .config(Router)
  .controller('MainCtrl', MainCtrl)
  .controller('AuthRegisterCtrl', AuthRegisterCtrl)
  .controller('AuthLoginCtrl', AuthLoginCtrl)
  .directive('googleMap', googleMap);
