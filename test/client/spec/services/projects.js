'use strict';

describe('Service: Projects', function() {

  // load the service's module
  beforeEach(module('ultraApp'));

  // instantiate service
  var Projects, $timeout;
  var all, byYear;
  beforeEach(inject(function(_Projects_, _$timeout_) {
    Projects = _Projects_;
    $timeout = _$timeout_;

    Projects.getAll().then(function(response) {
      all = response;
    });
    Projects.getAll().then(function(response) {
      byYear = Projects.groupByYear(response);
    });
    $timeout.flush();

  }));

  describe('query methods', function() {

    it('should get all projects', function() {
      expect(all.length).toBeGreaterThan(0);
    });

    it('should get all projects grouped by year', function() {
      expect(byYear[0].items.length).toBeGreaterThan(0);
    });

    describe('query by tags', function() {

      var byTag;

      beforeEach(function() {
        Projects.getByTag(['tdd']).then(function(response) {
          byTag = response;
        });
        $timeout.flush();
      });

      it('should get all projects by tag array and grouped by year', function() {
        expect(byTag.length).toBeGreaterThan(0);
      });

    });

  });

});
