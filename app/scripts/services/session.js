'use strict';

angular.module('ultraApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
