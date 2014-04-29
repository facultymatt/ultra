'use strict';

angular.module('ultraApp')
  .provider('Tag', function() {

    // Method for instantiating
    this.$get = function($rootScope) {

      // Tag Constructor
      // @note ideally this would be a provider so we could 
      // more easily inject it into tests but for now it works fine :)
      function Tag(options) {

        this.name = options.name || '',
        this.slug = options.slug || '',
        this.count = parseInt(options.count) || 0,
        this.color = options.color || '#eee',
        this.baseColor = options.baseColor || '#eee'

        var active = options.active || false;

        Object.defineProperty(this, 'active', {
          get: function() {
            return active;
          },
          set: function(value) {
            active = value;
            $rootScope.$broadcast('tags.active.update');
          }
        });

        return this;
      }

      return Tag;
    };
  });
