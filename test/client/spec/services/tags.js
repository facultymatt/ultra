'use strict';

describe('Service: Tags', function() {

  // load the service's module
  beforeEach(module('ultraApp'));

  // instantiate service
  var Tags, $httpBackend, $timeout;
  var tags, groups, one;
  beforeEach(inject(function(_Tags_, _$httpBackend_, _$timeout_) {
    Tags = _Tags_;
    $httpBackend = _$httpBackend_;
    $timeout = _$timeout_;

    Tags.getAll().then(function(response) {
      tags = response;
    });
    Tags.getGroups().then(function(response) {
      groups = response;
    });
    Tags.getOne('tdd').then(function(response) {
      one = response;
    });
    $timeout.flush();

  }));

  describe('query methods', function() {

    it('should query all tags', function() {
      expect(tags.length).toBeGreaterThan(0);
    });

    it('tags should have a slug', function() {
      expect(tags[0].slug).toBeDefined();
    });

    it('should query all groups', function() {
      expect(groups.length).toBeGreaterThan(0);
    });

    it('groups should have array of tags', function() {
      expect(groups[0].tags.length).toBeGreaterThan(0);
    });

    it('can get one tag by slug', function() {
      expect(one.slug).toBe('tdd');
    });

  });

  describe('setting colors', function() {

    it('should set color on group', function() {
      expect(groups[0].color).toBeDefined();
    });

    it('should set baseColor on group', function() {
      expect(groups[0].baseColor).toBeDefined();
    });

    it('should set colors on group tags', function() {
      expect(groups[0].tags[0].color).toBeDefined();
    });

    it('should set baseColor on group tags to be group color', function() {
      expect(groups[0].tags[1].baseColor).toBe(groups[0].color);
    });

  });
  

  describe('setting and getting active tags', function() {
    
    it('sets tag active', function() {
      tags[0].active = true;
      Tags.getAll().then(function(response) {
        one = response[0];
      });
      $timeout.flush();
      expect(one.active).toBe(true);
    });

    it('gets all active tags', function() {
      var activeTags;
      tags[0].active = true;
      tags[1].active = true;
      tags[2].active = true;
      Tags.getActive().then(function(response) {
        activeTags = response;
      });
      $timeout.flush();
      expect(activeTags.length).toBe(3);
    });

  });

});
