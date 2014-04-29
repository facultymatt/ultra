'use strict';

describe('Service: tag', function () {

  // load the service's module
  beforeEach(module('ultraApp'));

  // instantiate service
  var Tag;
  beforeEach(inject(function (_Tag_) {
    Tag = _Tag_;
  }));

  it('should do something', function () {
    expect(!!Tag).toBe(true);
  });

});
