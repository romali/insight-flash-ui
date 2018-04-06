'use strict';

angular.module('insight.blockreport').controller('BlockReportController',
  function($scope, $rootScope, $routeParams, $location, $http, Global, getSocket) {
    $scope.global = Global;
    $scope.loading = false;

    var socket = getSocket($scope);

    $scope.report = function() {
      //console.log('Starting get addreses');
      $scope.loading = true;
      $http.get('https://blockinfo.flashcoin.io/api/report/block/general').
        then(function(response) {
          $scope.loading = false;
          $scope.blockreport = response.data;
          console.log('$scope.blockreport',$scope.blockreport);
        });
    };

    $scope.params = $routeParams;

  });
