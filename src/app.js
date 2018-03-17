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
import UserShowCtrl from './controllers/auth/show';

// Styling
import 'bulma';
import './assets/scss/style.scss';

// Directives
import googleMap from './directives/google-map';

// Services
import User from './services/user';



angular.module('crave',['ui.router', 'satellizer'])
  .config(Router)
  .config(Auth)
  .controller('MainCtrl', MainCtrl)
  .controller('AuthRegisterCtrl', AuthRegisterCtrl)
  .controller('AuthLoginCtrl', AuthLoginCtrl)
  .controller('UserShowCtrl', UserShowCtrl)
  .directive('googleMap', googleMap)
  .service('User', User);
