'use strict';

angular.module('myApp')
  .directive('list', listDirective);

function listDirective() {
  return {
    templateUrl: 'templates/list.html',
    scope: {
      items: '=',
      deleteItem: '&'
    }
  }
}
