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
import AuthShowCtrl from './controllers/auth/show';
import AuthEditCtrl from './controllers/auth/edit';

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
  .controller('AuthShowCtrl', AuthShowCtrl)
  .controller('AuthEditCtrl', AuthEditCtrl)
  .directive('googleMap', googleMap)
  .service('User', User);
