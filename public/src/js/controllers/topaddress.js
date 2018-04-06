'use strict';

angular.module('insight.topaddress').controller('TopAddressController',
  function($scope, $rootScope, $routeParams, $location, $http, Global, TopAddress, getSocket) {
    $scope.global = Global;
    $scope.loading = false;

    var socket = getSocket($scope);

    $scope.list = function() {
      //console.log('Starting get addreses');
      $scope.loading = true;
      $http.get('https://blockinfo.flashcoin.io/api/report/addr/richlist').
        then(function(response) {
          $scope.loading = false;
          $scope.addrList = response.data;
          //console.log('$scope.addrList',$scope.addrList);
        });
    };

    $scope.params = $routeParams;

  });
