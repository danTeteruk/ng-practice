'use strict';

angular.module('myApp')
  .directive('listItem', listItemDirective);

function listItemDirective() {
  return {
    scope: {
      id: '=',
      title: '=',
      description: '=',
      deleteItem: '&',
    },
    templateUrl: 'templates/list-item.html',
    link: function($scope) {
      console.log("SCOPE>?", $scope);

    }



  }
}
