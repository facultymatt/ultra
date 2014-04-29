'use strict';

// @see http://bl.ocks.org/mbostock/4342190 for interpolation 
// values for d3 charts

angular.module('ultraApp')
  .controller('MainCtrl', function($scope, $http, timeline, $location, $routeParams, $analytics, $timeout) {

    // ------------------------------
    // Tags
    // ------------------------------

    $scope.cities = [{
      "value": 1,
      "text": "Amsterdam",
      "continent": "Europe"
    }];

    // set active tag
    // @todo support tag array
    $scope.setActiveTag = function(tag) {
      $scope.filterTerm = tag.toLowerCase();
      setTimelineFromTag();
    }


    // ------------------------------
    // Tooltips
    // ------------------------------

    // triggers the project "tooltip" to open
    $scope.setActiveProject = function(item) {
      $timeout.cancel(activeTimeout);
      $scope.activeItem = item;
    };

    var activeTimeout = null;

    $scope.cancelTimeout = function() {
      $timeout.cancel(activeTimeout); 
    }

    $scope.countDownToHide = function() {
      activeTimeout = $timeout(function() {
        $timeout.cancel(activeTimeout);
        $scope.activeItem = null;
      }, 1000);
    };

    // tooltips that show when use how
    $scope.toolTipContentFunction = function() {
      return function(key, x, y, e, graph) {

        var string = '';

        string += '<h3>' + key + '</h3>';
        string += '<p>' + y + ' projects in ' + x + '</p>';

        return string;
      };
    };


    // ------------------------------
    // Colors
    // ------------------------------

    var colors = {};

    var colorCats = [{
      type: "Core competency",
      baseColor: ["FFA900", 'FFCB00'],
      baseColorScheme: 'Greys',
      tags: ['openframeworks', 'javascript']
    }, {
      type: "Technology",
      baseColor: ["2D94CC", 'lightblue'],
      baseColorScheme: 'YlOrBr',
      tags: ['angularjs', 'nodejs', 'jquery', 'html5', 'api', 'geolocation', 'mongodb', 'drupal', 'tdd', 'php']
    }, {
      type: "Areas of Interest",
      baseColor: ["57544F", 'lightgray'],
      baseColorScheme: 'BuGn',
      tags: ['presentation', 'demonstration', 'publication', 'website', 'exhibition', 'print', 'physical prototype', 'game', 'lego', 'apps']
    }];


    // get color
    $scope.getColorForTag = function(tag) {
      if(!tag) return {};
      tag = tag.toLowerCase();
      var color = {
        color: colors[tag]
      };
      return color;
    };

    // get BG color
    // Todo refactor into same function
    $scope.getBgColorForTag = function(tag) {
      tag = tag.toLowerCase();
      var color = {
        'background-color': colors[tag]
      };
      return color;
    };
  
    // ------------------------------
    // Time line functions
    // ------------------------------

    $scope.colorFunction = function() {
      return function(d) {
        if (d.title) {
          return '#333';
        } else {
          return colors[d.key.toLowerCase()];
        }
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
    $scope.years = timeline.getAllGroupedByYear();
    $scope.tags = timeline.getTags();
    $scope.$watch('tags', function() {
      $scope.colorCats = setTagColors();
    });
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
      //console.log(newValue);
      $scope.exampleData = newValue;
    });

    $scope.allProjects = timeline.getAllProjectsForTimeline();
    $scope.$watch('allProjects', function(newValue) {
      //console.log(newValue);
      $scope.projectData = newValue;

      // initial setting of lines will only happen when data first loads
      if ($routeParams.tag) {
        setTimelineFromTag();
      }
    });

    // tag filtering
    $scope.filterTerm = $routeParams.tag || '';
    $scope.matches = 0;

    // $scope.$on('$locationChangeSuccess', function() {
    //   $scope.filterTerm = $routeParams.tag || '';
    // });

    $scope.updateTimelineWithTypeaheadValue = function() {
      setTimelineFromTag();
    };

    function setTimelineFromTag() {
      var filterTerm = $scope.filterTerm.toLowerCase();
      _.each($scope.exampleData, function(data) {
        var dataKey = data.key.toLowerCase();
        if (filterTerm === '') {
          data.disabled = false;
          return;
        } else if (dataKey === filterTerm) {
          //console.log('enable ' + dataKey);
          data.disabled = false;
        } else {
          //console.log('disable ' + dataKey);
          data.disabled = true;
        }
      });
      $timeout(function() {
        $scope.$apply();
      }, 0);
    }

    $scope.$watch('filterTerm', function(newValue) {

      newValue = newValue.toString().toLowerCase();

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

      if (newValue !== '') {
        $location.search('tag', newValue);
      } else {
        setTimelineFromTag();
        $location.search({});
      }

    });

  });
