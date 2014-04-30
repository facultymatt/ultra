'use strict';

// @see http://bl.ocks.org/mbostock/4342190 for interpolation 
// values for d3 charts

angular.module('ultraApp')
  .controller('MainCtrl', function($scope, $http, $location, $routeParams, $analytics, $timeout, Projects, Tags, Timeline) {

    $scope.activeTags = [];

    // get initial tags if any
    $scope.activeTagsString = $routeParams.tags || '';

    // parse tags on page load
    // parse tags=one,two,three into array [one, two, three]
    // then create tag objects, set them active
    if ($scope.activeTagsString !== '') {
      var tags = $scope.activeTagsString.split(',');
      _.each(tags, function(slug) {
        Tags.getOne(slug).then(function(response) {
          response.active = true;
        });
      });
    }

    // update browser url as user changes tags
    $scope.$watch('activeTagsString', function(newValue) {
      if (newValue !== '') {
        $location.search('tags', newValue);
      } else {
        $location.search({});
      }
    });

    // track get params as regular page views
    // this lets us more easily see in analytics dashboard
    $scope.$on('$locationChangeSuccess', function() {
      $analytics.pageTrack($location.url());
    });

    // tag groups display at top of page 
    // and let user click them to activate and deactivate
    Tags.getGroups().then(function(response) {
      $scope.tagGroups = response;
    });

    // get all tags for showing on first load
    Tags.getAll().then(function(response) {
      $scope.allTags = response;
    });

    // watch active tags and either get by those tags or
    // get all projects if no tag exists. Note the getByTag
    // method handles this logic for us so we only need to call
    // to get by tag or all. Also note we must call groupByYear on the data
    $scope.$watch('activeTags', function(newValue) {

      // if we have active tags, use them to generate the timeline
      // else we use all the tags
      if (newValue && newValue.length) {
        $scope.exampleData = Timeline.formatProjectTagsForTimeline(newValue, Projects.getTimeRange());
      } else {
        $scope.exampleData = Timeline.formatProjectTagsForTimeline($scope.allTags, Projects.getTimeRange());
      }

      // update project listing
      Projects.getByTag(newValue).then(function(response) {
        $scope.years = Projects.groupByYear(response);
      });

    });

    // changing a tags active property causes its setter to broadcast
    // so we can hook into that here and get a new active tags array
    $scope.$on('tags.active.update', function() {
      Tags.getActive().then(function(response) {
        $scope.activeTags = response;
        $scope.activeTagsString = _.pluck(response, 'slug').join(',');
      });
    });


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
    };

    $scope.countDownToHide = function() {
      activeTimeout = $timeout(function() {
        $timeout.cancel(activeTimeout);
        $scope.activeItem = null;
      }, 1000);
    };

    // // ------------------------------
    // // Time line functions
    // // ------------------------------

    $scope.colorFunction = function() {
      return function(d) {
        //console.log(d);
        return d.color;
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

    // tooltips that show when use how
    $scope.toolTipContentFunction = function() {
      return function(key, x, y) {
        var string = '';
        string += '<h3>' + key + '</h3>';
        string += '<p>' + y + ' projects in ' + x + '</p>';
        return string;
      };
    };

  });
