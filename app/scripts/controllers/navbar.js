'use strict';

angular.module('ultraApp')
  .controller('NavbarCtrl', function($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }, {
      'title': 'Settings',
      'link': '/settings'
    }, {
      'title': 'Projects',
      'link': '/projects'
    }];

    $scope.logout = function() {
      Auth.logout()
        .then(function() {
          $location.path('/login');
        });
    };

    $scope.isActive = function(path) {
      var curPath = $location.path();

      // do some counting
      //var splitCurPath = curPath.split('/').length;
      //var splitPath = path.split('/').length;

      //console.log('$location.path() is: ' + curPath + ', path is: ' + path);
      if (curPath === path) {
        //return "active";
        return true;
      } else if ($location.path().indexOf(path) > -1) {
        if (path === '/' && curPath !== '/') {
          return false;
        }
        // removed  && path.split('/').length === 3
        // this check prevents 'dashboard' from being active when user is viewing quotes
        //return "active active-trail";
        return true;
      } else {
        //return "";
        return false;
      }
    };

  });
