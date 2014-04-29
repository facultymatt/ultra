'use strict';

describe('Service: Timeline', function () {

  // load the service's module
  beforeEach(module('ultraApp'));

  // instantiate service
  var Timeline;
  beforeEach(inject(function (_Timeline_) {
    Timeline = _Timeline_;
  }));

  it('should do something', function () {
    expect(!!Timeline).toBe(true);
  });

});
