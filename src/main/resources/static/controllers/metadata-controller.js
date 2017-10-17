(function () {
  'use strict';

  angular
    .module('app')
    .controller('MetadataController', MetadataController);

  MetadataController.$inject = [ '$templateCache', 'EapAdminConnection'];

  function MetadataController($templateCache, EapAdminConnection) {
    var vm = this;

        vm.eventText = '';
        var handleCheckBoxChange = function (item, selected, e) {
          vm.eventText = item.name + ' checked: ' + item.selected + '\r\n' + vm.eventText;
        };

        vm.enableButtonForItemFn = function(action, item) {
          return !((action.name ==='Action 2') && (item.name === "Frank Livingston")) &&
                 !(action.name === 'Start' && item.started);
        };

        vm.updateMenuActionForItemFn = function(action, item) {
          if (action.name === 'Another Action') {
            action.isVisible = (item.name !== "John Smith");
          }
        };

        vm.customScope = {
          toggleExpandItemField: function(item, field) {
            if (item.isExpanded && item.expandField === field) {
              item.isExpanded = false;
            } else {
              item.isExpanded = true;
              item.expandField = field;
            }
          },
          collapseItem: function(item) {
            item.isExpanded = false;
          },
          isItemExpanded: function(item, field) {
            return item.isExpanded && item.expandField === field;
          }
        };

        vm.selectType = 'checkbox';
        vm.showDisabled = false;

        vm.config = {
         selectionMatchProp: 'name',
         selectedItems: [],
         itemsAvailable: true,
         showSelectBox: true,
         useExpandingRows: true,
         compoundExpansionOnly: true,
         onCheckBoxChange: handleCheckBoxChange
        };

        vm.items = [
          {
            name: "Event One",
            typeIcon: "fa fa-plane ",
            hostCount: 8,
            clusterCount: 6,
            nodeCount: 10,
            imageCount: 8
          },
          {
            name: "Event Two",
            typeIcon: "fa fa-magic ",
            hostCount: 8,
            clusterCount: 6,
            nodeCount: 10,
            imageCount: 8
          },
          {
            name: "Event Three",
            typeIcon: "fa fa-gamepad ",
            hostCount: 8,
            clusterCount: 6,
            nodeCount: 10,
            imageCount: 8
          },
          {
            name: "Event Four",
            typeIcon: "fa fa-linux ",
            hostCount: 8,
            clusterCount: 6,
            nodeCount: 10,
            imageCount: 8
          },
          {
            name: "Event Five",
            typeIcon: "fa fa-briefcase ",
            hostCount: 8,
            clusterCount: 6,
            nodeCount: 10,
            imageCount: 8
          },
          {
            name: "Event Six",
            typeIcon: "fa fa-coffee ",
            hostCount: 8,
            clusterCount: 6,
            nodeCount: 10,
            imageCount: 8
          }
        ];

        vm.getMenuClass = function (item) {
          var menuClass = "";
          if (item.name === "Jim Brown") {
            menuClass = 'red';
          }
          return menuClass;
        };

        vm.hideMenuActions = function (item) {
          return (item.name === "Marie Edwards");
        };

        var performAction = function (action, item) {
          vm.eventText = item.name + " : " + action.name + "\r\n" + vm.eventText;
        };

        var startServer = function (action, item) {
          vm.eventText = item.name + " : " + action.name + "\r\n" + vm.eventText;
          item.started = true;
        };

        var buttonInclude = '<span class="fa fa-plus"></span>{{actionButton.name}}';
        $templateCache.put('my-button-template', buttonInclude);

        var startButtonInclude = '<span ng-disabled="item.started">{{item.started ? "Starting" : "Start"}}</span>';
        $templateCache.put('start-button-template', startButtonInclude);

        vm.actionButtons = [
          {
            name: 'Action',
            title: 'Perform an action',
            actionFn: performAction
          }
        ];
        vm.menuActions = [
          {
            name: 'Action',
            title: 'Perform an action',
            actionFn: performAction
          },
          {
            name: 'Another Action',
            title: 'Do something else',
            actionFn: performAction
          },
          {
            name: 'Disabled Action',
            title: 'Unavailable action',
            actionFn: performAction,
            isDisabled: true
          },
          {
            name: 'Something Else',
            title: '',
            actionFn: performAction
          },
          {
            isSeparator: true
          },
          {
            name: 'Grouped Action 1',
            title: 'Do something',
            actionFn: performAction
          },
          {
            name: 'Grouped Action 2',
            title: 'Do something similar',
            actionFn: performAction
          }
        ];



  }; // END function MetadataController
})();
