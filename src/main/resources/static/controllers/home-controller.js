(function () {
  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  HomeController.$inject = [ '$interval', 'EapAdminConnection'];

  function HomeController($interval, EapAdminConnection) {
    var vm = this;

    vm.ds_updatedate = "N/A";
    vm.vdb_updatedate = "N/A";
    vm.vdb_count = 0;
    vm.vdb_valid_count = 0;
    vm.ds_count = 0;
    vm.physicalModel_count = 0;
    vm.virtualModel_count = 0;
    vm.physicalTable_count = 0;
    vm.virtualTable_count = 0;
    vm.datasource_count = 0;

    EapAdminConnection.getVDBs()
           .then(function (result) {
            vm.vdb_updatedate = Date();
            vm.result = result;

            var vdbs = result;

            vm.vdb_count = vdbs.length;

            vdbs.forEach(function(vdb){
                vm.vdb_valid_count = vm.vdb_valid_count + ((vdb.valid) ? 1 : 0);

                vdb.models.forEach(function(model){
                    switch(model.modelType){
                        case "VIRTUAL":
                            vm.virtualModel_count++;
                            break;
                        case "PHYSICAL":
                            vm.physicalModel_count++;
                            break;
                    }
                });
            });
           });

    EapAdminConnection.getDatasources()
       .then(function (result) {
         var datasources = result;

         vm.datasources = datasources;

        vm.ds_updatedate = Date();
        vm.datasource_count = datasources.length;

       });
  }; // END function HomeController
})();
