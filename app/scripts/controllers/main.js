'use strict';

angular.module('ultraApp')
  .controller('MainCtrl', function ($scope, $http, timeline) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
    
    $scope.years = timeline.getAllItemsGroupedByYear();
    
    $scope.tags = timeline.getTags();
    $scope.filterTerm = '';

    $scope.$watch('filterTerm', function(newValue) {
      newValue = newValue.toLowerCase();
      _.each($scope.years, function(year) {
        _.each(year.items, function(item) {
          var tags = item.tags.join(' ').toLowerCase();
          item.match = tags.indexOf(newValue) !== -1 ? true : false;
        })
      })
    });

  });
