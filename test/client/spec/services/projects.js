'use strict';

describe('Service: Projects', function () {

  // load the service's module
  beforeEach(module('ultraApp'));

  // instantiate service
  var Projects, $timeout;
  var all, byYear;
  beforeEach(inject(function (_Projects_, _$timeout_) {
    Projects = _Projects_;
    $timeout = _$timeout_;

    Projects.getAll().then(function(response) {
      all = response;
    });
    Projects.getAllGroupedByYear().then(function(response) {
      byYear = response;
    });

    $timeout.flush();

  }));

  describe('query methods', function() {
    
    it('should get all projects', function() {
      expect(all.length).toBeGreaterThan(0);
    });

    it('should get all projects grouped by year', function() {
      console.log(byYear);
      expect(byYear[0].items.length).toBeGreaterThan(0);
    });

  });

});
