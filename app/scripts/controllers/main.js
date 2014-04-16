'use strict';

angular.module('ultraApp')
  .controller('MainCtrl', function ($scope, $http, timeline) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
    
    $scope.years = timeline.getAllItemsGroupedByYear();
    
    $scope.tags = timeline.getTags();
    $scope.filterTerm = '';
    $scope.matches = 0;

    $scope.$watch('filterTerm', function(newValue) {
      newValue = newValue.toLowerCase();
      $scope.matches = 0;
      _.each($scope.years, function(year) {
        _.filter(year.items, function(item) {
          var tags = item.tags.join(' ').toLowerCase();
          item.match = tags.indexOf(newValue) !== -1 ? true : false;
          if(item.match) {
            $scope.matches++;
            return true;
          }
        });
      });
    });

  });
