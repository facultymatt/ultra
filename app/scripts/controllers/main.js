'use strict';

// @see http://bl.ocks.org/mbostock/4342190 for interpolation 
// values for d3 charts

angular.module('ultraApp')
  .controller('MainCtrl', function($scope, $http, $location, $routeParams, $analytics, $timeout, Projects, Tags) {

    $scope.matches = 1;
    $scope.activeTags = [];

    // tag groups display at top of page 
    // and let user click them to activate and deactivate
    Tags.getGroups().then(function(response) {
      $scope.tagGroups = response;
    });

    // watch active tags and either get by those tags or
    // get all projects if no tag exists. Note the getByTagGroupedByYear
    // method handles this logic for us so we only need to call
    $scope.$watch('activeTags', function(newValue) {
      Projects.getByTagGroupedByYear(newValue).then(function(response) {
        $scope.years = response;
      });
    });

    // changing a tags active property causes its setter to broadcast
    $scope.$on('tags.active.update', function() {
       Tags.getActive().then(function(response) {
          $scope.activeTags = response;
       }) 
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
    }

    $scope.countDownToHide = function() {
      activeTimeout = $timeout(function() {
        $timeout.cancel(activeTimeout);
        $scope.activeItem = null;
      }, 1000);
    };

    // // tooltips that show when use how
    // $scope.toolTipContentFunction = function() {
    //   return function(key, x, y, e, graph) {

    //     var string = '';

    //     string += '<h3>' + key + '</h3>';
    //     string += '<p>' + y + ' projects in ' + x + '</p>';

    //     return string;
    //   };
    // };


    // // ------------------------------
    // // Colors
    // // ------------------------------

    // var colors = {};

    // var colorCats = [{
    //   type: "Core competency",
    //   baseColor: ["FFA900", 'FFCB00'],
    //   baseColorScheme: 'Greys',
    //   tags: ['openframeworks', 'javascript']
    // }, {
    //   type: "Technology",
    //   baseColor: ["2D94CC", 'lightblue'],
    //   baseColorScheme: 'YlOrBr',
    //   tags: ['angularjs', 'nodejs', 'jquery', 'html5', 'api', 'geolocation', 'mongodb', 'drupal', 'tdd', 'php']
    // }, {
    //   type: "Areas of Interest",
    //   baseColor: ["57544F", 'lightgray'],
    //   baseColorScheme: 'BuGn',
    //   tags: ['presentation', 'demonstration', 'publication', 'website', 'exhibition', 'print', 'physical prototype', 'game', 'lego', 'apps']
    // }];


    // // get color
    // $scope.getColorForTag = function(tag) {
    //   if(!tag) return {};
    //   tag = tag.toLowerCase();
    //   var color = {
    //     color: colors[tag]
    //   };
    //   return color;
    // };

    // // get BG color
    // // Todo refactor into same function
    // $scope.getBgColorForTag = function(tag) {
    //   tag = tag.toLowerCase();
    //   var color = {
    //     'background-color': colors[tag]
    //   };
    //   return color;
    // };
  
    // // ------------------------------
    // // Time line functions
    // // ------------------------------

    // $scope.colorFunction = function() {
    //   return function(d) {
    //     if (d.title) {
    //       return '#333';
    //     } else {
    //       return colors[d.key.toLowerCase()];
    //     }
    //   };
    // };

    // $scope.xFunction = function() {
    //   return function(d) {
    //     return d.x;
    //   };
    // };

    // $scope.yFunction = function() {
    //   return function(d) {
    //     return d.y;
    //   };
    // };

    // // load data from service
    // $scope.years = timeline.getAllGroupedByYear();
    // $scope.tags = timeline.getTags();
    // $scope.$watch('tags', function() {
    //   $scope.colorCats = setTagColors();
    // });
    // $scope.tagsWithYearlyCount = timeline.getTagsWithYearlyCount();

    // // quick and dirty to filter down all tags for the timeline
    // // in future we can hook into the searching user is doing
    // // or create groups of tags based on tech, type, etc. 
    // $scope.$watch('tagsWithYearlyCount', function(newValue) {
    //   $scope.allData = newValue;
    // });

    // // tag filtering
    // $scope.filterTerm = $routeParams.tag || '';

    // $scope.$on('$locationChangeSuccess', function() {
    //   $scope.filterTerm = $routeParams.tag || '';
    // });


    // function setTimelineFromTag() {
    //   var filterTerm = $scope.filterTerm.toLowerCase();
    //   _.each($scope.exampleData, function(data) {
    //     var dataKey = data.key.toLowerCase();
    //     if (filterTerm === '') {
    //       data.disabled = false;
    //       return;
    //     } else if (dataKey === filterTerm) {
    //       //console.log('enable ' + dataKey);
    //       data.disabled = false;
    //     } else {
    //       //console.log('disable ' + dataKey);
    //       data.disabled = true;
    //     }
    //   });
    //   $timeout(function() {
    //     $scope.$apply();
    //   }, 0);
    // }

    // $scope.$watch('filterTerm', function(newValue) {

    //   if (newValue !== '') {
    //     $location.search('tag', newValue);
    //   } else {
    //     setTimelineFromTag();
    //     $location.search({});
    //   }

    // });

  });
