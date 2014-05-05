'use strict';

angular.module('ultraApp')
  .service('Tags', function Tags($q, $rootScope, Tag, Category) {

    var tags = [],
      groups = [],
      categories = [];

    // ------------------------------
    // Query methods
    // ------------------------------

    // get all tags
    this.getAll = function() {
      var deferred = $q.defer();
      deferred.resolve(tags);
      return deferred.promise;
    };

    // get all tags
    this.getOne = function(tagSlug) {
      tagSlug = tagSlug.toLowerCase();
      var deferred = $q.defer();
      var found = _.find(tags, {
        slug: tagSlug
      }) || [];
      deferred.resolve(found);
      return deferred.promise;
    };

    // get all groups
    this.getGroups = function() {
      var deferred = $q.defer();
      deferred.resolve(groups);
      return deferred.promise;
    };

    // gets active tags
    this.getActive = function() {
      var deferred = $q.defer();
      deferred.resolve(_.where(tags, {
        active: true
      }));
      return deferred.promise;
    };

    // setup data
    // @note data will be manipulated before 
    // when app first runs. we slugify the name
    // and we convert the tag array into an array of objects. 
    categories = [{
      name: "Language",
      baseColorScheme: ["FFA900", 'FFCB00'],
      tags: ['openframeworks', 'javascript']
    }, {
      name: "Technology",
      baseColorScheme: ["2D94CC", 'lightblue'],
      tags: ['angularjs', 'nodejs', 'jquery', 'html5', 'api', 'geolocation', 'mongodb', 'drupal', 'tdd', 'php']
    }, {
      name: "Interest",
      baseColorScheme: ["57544F", 'lightgray'],
      tags: ['computer vision', 'prototype', 'website', 'app', 'exhibition', 'lego', 'teaching', 'presentation', 'demo', 'publication', 'print']
    }];

    // uses the colors array and tags
    (function setup() {
      _.each(categories, function(cat, i) {
        groups.push(new Category(cat));
        tags = tags.concat(groups[i].tags);
      });
    }());

  });
