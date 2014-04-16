'use strict';

// @see http://bl.ocks.org/mbostock/4342190 for interpolation 
// values for d3 charts

angular.module('ultraApp')
  .controller('MainCtrl', function($scope, $http, timeline) {

    // we need some better colors!
    var colorArray = ['#ffa500', '#c80032', '#0000ff', '#6464ff'];
    $scope.colorFunction = function() {
      return function() {
        return colorArray[1];
      };
    };
    $scope.xFunction = function() {
      return function(d) {
        return d.x;
      };
    };

    $scope.yFunction = function() {
      return function(d) {
        return d.y;
      };
    };

    // load data from service
    $scope.years = timeline.getAllItemsGroupedByYear();
    $scope.tags = timeline.getTags();
    $scope.tagsWithYearlyCount = timeline.getTagsWithYearlyCount();
    
    // quick and dirty to filter down all tags for the timeline
    // in future we can hook into the searching user is doing
    // or create groups of tags based on tech, type, etc. 
    $scope.$watch('tagsWithYearlyCount', function(newValue) {
      $scope.allData = newValue;
    });

    $scope.viewTags = ['openframeworks', 'angularjs', 'game'];
    $scope.$watch('allData', function(newValue) {
      // $scope.exampleData = _.filter(newValue, function(item) {
      //   console.log($scope.viewTags.indexOf(item.key.toLowerCase()));
      //   return $scope.viewTags.indexOf(item.key.toLowerCase()) !== -1;
      // });

      $scope.exampleData = newValue;

    });

    // tag filtering
    $scope.filterTerm = '';
    $scope.matches = 0;

    $scope.$watch('filterTerm', function(newValue) {
      newValue = newValue.toLowerCase();
      $scope.matches = 0;
      _.each($scope.years, function(year) {
        _.filter(year.items, function(item) {
          var tags = item.tags.join(' ').toLowerCase();
          item.match = tags.indexOf(newValue) !== -1 ? true : false;
          if (item.match) {
            $scope.matches++;
            return true;
          }
        });
      });
    });

  });
