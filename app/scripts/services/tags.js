'use strict';

angular.module('ultraApp')
  .service('Tags', function Tags($q) {

    var tags = [], groups = [];

    // mock async all call
    // starting with this pattern allows seamless transition to
    // database when

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
      var found = _.find(tags, {slug: tagSlug}) || [];
      deferred.resolve(found);
      return deferred.promise;
    };

    // get all groups
    this.getGroups = function() {
      var deferred = $q.defer();
      deferred.resolve(groups);
      return deferred.promise;
    };

    // ------------------------------
    // Color methods
    // ------------------------------

    // get a color for a tag given tag slug
    this.getColorForTag = function(tagSlug) {
      tagSlug = tagSlug.toLowerCase();
      var tag = _.find(tags, {slug: tagSlug});
      return tag ? tag.color : '';
    };

    // get base color (the group color) for tag given slug
    this.getBaseColorForTag = function(tagSlug) {
      tagSlug = tagSlug.toLowerCase();
      var tag = _.find(tags, {slug: tagSlug});
      return tag ? tag.baseColor : '';
    };

    // get color (will be same as base color) for a group given slug
    this.getColorForGroup = function(groupSlug) {
      groupSlug = groupSlug.toLowerCase();
      var group = _.find(groups, {slug: groupSlug});
      return group ? group.color : '';
    };


    // setup data
    // @note data will be manipulated before 
    // when app first runs. we slugify the name
    // and we convert the tag array into an array of objects. 
    groups = [{
      name: "Core competency",
      baseColorScheme: ["FFA900", 'FFCB00'],
      tags: ['openframeworks', 'javascript']
    }, {
      name: "Technology",
      baseColorScheme: ["2D94CC", 'lightblue'],
      tags: ['angularjs', 'nodejs', 'jquery', 'html5', 'api', 'geolocation', 'mongodb', 'drupal', 'tdd', 'php']
    }, {
      name: "Areas of Interest",
      baseColorScheme: ["57544F", 'lightgray'],
      tags: ['presentation', 'demonstration', 'publication', 'website', 'exhibition', 'print', 'physical prototype', 'game', 'lego', 'apps']
    }];

    // uses the colors array and tags
    (function assignTagsToGroups() {
      _.each(groups, function(cat, i) {

        var scale = chroma.scale(cat.baseColorScheme).domain([0, cat.tags.length], cat.tags.length);

        // set group colors
        cat.color = scale(0).hex();
        cat.baseColor = scale(0).hex();

        // set group slug
        cat.slug = cat.name.toLowerCase();

        _.each(cat.tags, function(tagName, i) {
          
          var tag = {
            active: false,
            display: tagName,
            slug: tagName,
            count: 0,
            color: scale(i).hex(),
            baseColor: scale(0).hex()
          }

          // overwrite this tag string with a tag object
          cat.tags[i] = tag;

          // push to all tags array
          // later we'll do things like count projects for tag
          tags.push(tag);

        });
      });
    }());

  });
