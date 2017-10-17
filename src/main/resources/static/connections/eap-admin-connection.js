(function () {
    'use strict';

    angular
        .module('app')
        .factory('EapAdminConnection', EapAdminConnection);

    EapAdminConnection.$inject = ['$http', '$q'];
    function EapAdminConnection($http, $q) {
        var connection = {};

        connection.getVDBList = getVDBList;
        connection.getDatasources = getDatasources;
        connection.getVDBs = getVDBs;
        connection.getDataLineage = getDataLineage;

        return connection;

        function getVDBList() {
            return $http({
                       url: "endpoints/virtualdatabases",
                       method: "GET",
                       params: {}
                    }).then(handleSuccess, handleError('Error EapAdminConnection.getVDBList'));
        }

        function getDataLineage() {
            return $http({
                       url: "endpoints/datalineage",
                       method: "GET",
                       params: {}
                    }).then(handleSuccess, handleError('Error EapAdminConnection.getDataLineage'));
        }

        function getDatasources() {
            return $http({
                       url: "endpoints/datasources",
                       method: "GET",
                       params: {}
                    }).then(handleSuccess, handleError('Error EapAdminConnection.getDataSources'));
        }

        function getVDBs() {
            return $http({
                       url: "endpoints/vdbs",
                       method: "GET",
                       params: {}
                    }).then(handleSuccess, handleError('Error EapAdminConnection.getVDBs'));
        }

        // -----------------------------
        // private functions
        // -----------------------------
        function handleSuccess(result) {
            return result.data;
        }

        function handleError(error) {
            return function () {
                alert(error);
                return { success: false, message: error };
            };
        }
    }
})();
