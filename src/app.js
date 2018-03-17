import angular from 'angular';

// Config
import Router from './config/router';
import Auth from './config/auth';

// Dependencies
import '@uirouter/angularjs';
import 'satellizer';

// Controllers
import MainCtrl from './controllers/main';
import AuthRegisterCtrl from './controllers/auth/register';
import AuthLoginCtrl from './controllers/auth/login';

// Styling
import 'bulma';
import './assets/scss/style.scss';


import googleMap from './directives/google-map';


angular.module('crave',['ui.router', 'satellizer'])
  .config(Router)
  .config(Auth)
  .controller('MainCtrl', MainCtrl)
  .controller('AuthRegisterCtrl', AuthRegisterCtrl)
  .controller('AuthLoginCtrl', AuthLoginCtrl)
  .directive('googleMap', googleMap);
