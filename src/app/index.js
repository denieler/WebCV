'use strict';

import ScrollLib from '../vendors/angular-scroll.min';

import MainCtrl from './main/main.controller';

import TextTypeCtrl from '../app/components/texttype/texttype.controller';
import TextTypeDirective from '../app/components/texttype/texttype.directive';

angular.module('denieler', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'duScroll'])

  //--- CONFIG
  .constant('MEET_TEXT', ___meet_text)
  //---

  .controller('MainCtrl', MainCtrl)
  //.controller('TextTypeCtrl', TextTypeCtrl)
  .directive('textType', TextTypeDirective.directiveFactory)

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
