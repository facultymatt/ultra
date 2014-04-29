'use strict';

// @see http://bl.ocks.org/mbostock/4342190 for interpolation 
// values for d3 charts

angular.module('ultraApp')
  .controller('MainCtrl', function($scope, $http, timeline, $location, $routeParams, $analytics, $timeout) {

    // $scope.$on('stateChange.directive', function(angularEvent, event){
    //     console.log('elementClick', arguments);
    //     angularEvent.targetScope.$parent.event = event;
    //     angularEvent.targetScope.$parent.$digest();
    // });

    var activeTooltipObject = {};

    $scope.activeToolTip = function(item) {
      $scope.activeItem = item;
    };

    $scope.setActiveTag = function(tag) {
      console.log(tag);
      $scope.filterTerm = tag.toLowerCase();
      setTimelineFromTag();
    }

    // $scope.getActiveTooltip = function() {
    //   console.log('getting tooltip object');
    //   return activeTooltipObject;
    // }


    $scope.toolTipContentFunction = function() {
      return function(key, x, y, e, graph) {

        var string = '';

        string += '<h3>' + key + '</h3>';
        string += '<p>' + y + ' projects in ' + x + '</p>';

        return string;
      };
    };


    // $scope.$on('tooltipShow.directive', function (event) {
    //   var targetData = event.targetScope.data;
    //   _.each(targetData, function(item) {
    //     console.log(item);
    //   })
    // });

    //'legendClick', 'legendDblclick', 'legendMouseover'
    //stateChange
    $scope.$on('stateChange.legend.directive', function() {
      //console.log('stateChange.legend.directive', event, d);
    });
    $scope.$on('legendClick.directive', function(d, i) {
      var filterTerm = i.key.toLowerCase();
      $analytics.eventTrack('legendClick.directive', {
        category: 'key',
        label: filterTerm
      });
    });
    $scope.$on('legendDblclick.directive', function(d, i) {
      var filterTerm = i.key.toLowerCase();
      $scope.filterTerm = filterTerm;
      $analytics.eventTrack('legendDblclick.directive', {
        category: 'chart',
        label: filterTerm
      });
      $scope.$apply();
    });

    $scope.getColorForTag = function(tag) {
      tag = tag.toLowerCase();
      var color = {
        color: colors[tag]
      };
      return color;
    };

    $scope.getBgColorForTag = function(tag) {
      tag = tag.toLowerCase();
      var color = {
        'background-color': colors[tag]
      };
      return color;
    };

    // $scope.$on('legendMouseover.directive', function (d, i) {
    //   console.log('legendMouseover.directive', d, i);
    // });

    // we need some better colors!

    var colors = {
      openframeworks: 'FF8300',
      javascript: 'BF7930',
      angularjs: 'A65500',
      nodejs: 'FFA240',
      jquery: 'FFBB73',

      tdd: 'FFB400',
      html5: 'BF9530',
      api: 'A67500',
      geolocation: 'FFC740',
      mongodb: 'FFD673',

      drupal: 'FF2800',
      php: 'BF4630',

      presentation: 'A61A00',
      demonstration: 'FF5D40',
      publication: 'FF8973',

      game: '06799F',
      website: '216278',
      exhibition: 'A61A00',
      print: '024E68',
      lego: '3AAACF',
      'physical prototype': '61B4CF'
    };

    colors = {};

    var colorCats = [{
      type: "Core competency",
      baseColor: ["F5B620", 'white'],
      baseColorScheme: 'Greys',
      tags: ['openframeworks', 'javascript']
    }, {
      type: "Technology",
      baseColor: ["2D94CC", 'white'],
      baseColorScheme: 'YlOrBr',
      tags: ['angularjs', 'nodejs', 'jquery', 'html5', 'api', 'geolocation', 'mongodb', 'drupal', 'tdd', 'php']
    }, {
      type: "Areas of Interest",
      baseColor: ["57544F", 'white'],
      baseColorScheme: 'BuGn',
      tags: ['presentation', 'demonstration', 'publication', 'website', 'exhibition', 'print', 'physical prototype', 'game', 'lego', 'apps']
    }];


    _.each(colorCats, function(cat) {

      // get base color as tiny color object
      //var tColor = chroma(cat.baseColor);
      //var baseColor = chroma(cat.baseColor).hex();
      console.log(cat.baseColor);
      var scale = chroma.scale(cat.baseColor).domain([0, cat.tags.length+2], cat.tags.length);
      //var scale = chroma.scale('YlOrBr').domain([0, 200], cat.tags.length);
      console.log(scale.domain());

      //YlOrBr

      // generate monochromatic color scheme
      //var monoColorScheme = tinycolor.monochromatic(tColor, cat.tags.length);
      _.each(cat.tags, function(tagName, i) {
        var newColor = scale(i);
        colors[tagName] = newColor.hex();
        console.log(tagName, ' ', colors[tagName]);
      });
    });

    console.log(colors);

    $scope.colorCats = colorCats;


    /*
    
    // core competencies
    openframeworks
    javascript
    
    // technology
    angularjs
    nodejs
    jquery
    html5
    api
    geolocation
    mongodb
    drupal
    php
    tdd

    // area of interest
    presentation
    demonstration
    publication
    website
    exhibition
    print
    physical prototype
    game
    legos
    apps

    // jobs
    !!! add tags for these genious! 

    */


    /*

    FF8300  BF7930  A65500  FFA240  FFBB73
    Secondary Color A:
    FFB400  BF9530  A67500  FFC740  FFD673
    Secondary Color B:
    FF2800  BF4630  A61A00  FF5D40  FF8973
    Complementary Color:
    06799F  216278  024E68  3AAACF  61B4CF

    openframeworks
    javascript
    angularjs
    tdd
    nodejs
    jquery
    html5
    api
    geolocation
    mongodb
    drupal
    php

    presentation
    demonstration
    publication
    game
    website
    exhibition
    print
    legos
    physical prototype
    */

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
