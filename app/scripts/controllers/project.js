'use strict';

angular.module('ultraApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/projects/tactile-touch', {
        templateUrl: 'partials/projects/tactile_touch.html',
        controller: 'ProjectCtrl'
      })
      .when('/projects/rant-cloud', {
        templateUrl: 'partials/projects/rant_cloud.html',
        controller: 'ProjectCtrl'
      })
      .when('/projects/lego-fabrication-shop', {
        templateUrl: 'partials/projects/lego.html',
        controller: 'ProjectCtrl'
      })
      .when('/projects/draw-me-a-story', {
        templateUrl: 'partials/projects/draw_me_a_story.html',
        controller: 'ProjectCtrl'
      });
  })
  .controller('ProjectCtrl', function($scope, $routeParams) {
    $scope.slug = $routeParams.slug;

    console.log('Hello <<< ', $scope.slug);

  });
