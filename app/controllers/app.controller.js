'use strict';


var module = angular.module('myApp');
module.controller('AppCtrl', AppController);

function AppController($scope, Tasks) {
      $scope.items = Tasks.array();

    $scope.addItem = function(task) {
    Tasks.addItem(task);
    $scope.data = {
      title:"",
      description:""
     }
   }

   $scope.deleteItem = function(id) {
     Tasks.deleteItem(id);
   }


}
