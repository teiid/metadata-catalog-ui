(function () {
    'use strict';

    angular
        .module('app'
            , [
                'ngRoute'
                , 'ngCookies'
            ])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];
    function config($routeProvider, $locationProvider, $httpProvider) {
        $locationProvider.hashPrefix('');

        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html'
                , controller: 'HomeController'
                , controllerAs: 'vm'
            })
            .when('/datalineage', {
                templateUrl: 'partials/data-lineage.html'
                , controller: 'DataLineageController'
                , controllerAs: 'vm'
            })
            .when('/metadata', {
                templateUrl: 'partials/metadata.html'
                , controller: 'MetadataController'
                , controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/' });
    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};

        if ($rootScope.globals.currentUser) {
        alert("authdata:" + $rootScope.globals.currentUser.authdata);
//            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

//         $rootScope.$on('$locationChangeStart', function (event, next, current) {
//             $location.path('/');
//         });
    }

})();
