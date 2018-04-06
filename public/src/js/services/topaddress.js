'use strict';

angular.module('insight.topaddress').factory('TopAddress',
  function($resource) {
    return $resource(window.apiPrefix + '/report/richlist');
  });
