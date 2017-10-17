(function () {
  'use strict';

  angular
    .module('app')
    .directive('header', HeaderDirective);

function HeaderDirective() {

      return {
        restrict:     "AE",
        replace:      true,
        templateUrl:  "partials/header.html",
        controller:   'HeaderController',
        controllerAs: 'vm'
      }
    }; // END function HeaderDirective

})();
