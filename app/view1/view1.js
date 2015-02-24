'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {

    $scope.value = 5;
    $scope.data = { message : 'tempMessage' };

    $scope.tempFunction = function() {
	$scope.value = 8;
	alert();
    };
}]);
