'use strict';

angular.module('ultraApp')
  .provider('Tag', function() {

    // Method for instantiating
    this.$get = function($rootScope) {

      // Tag Constructor
      // @note ideally this would be a provider so we could 
      // more easily inject it into tests but for now it works fine :)
      function Tag(options) {
        
        var _this = this;

        _this.name = options.name || '';
        _this.slug = options.slug || options.name.toLowerCase();
        _this.count = parseInt(options.count) || 0;
        _this.color = options.color || '#eee';
        _this.baseColor = options.baseColor || '#eee';
        _this.projects = [];

        var active = options.active || false;

        Object.defineProperty(_this, 'active', {
          get: function() {
            return active;
          },
          set: function(value) {
            active = value;
            $rootScope.$broadcast('tags.active.update');
          }
        });

        Object.defineProperty(_this, 'years', {
          get: function() {
            return _.pluck(_this.projects, 'year');
          }
        });

        return _this;
      }

      return Tag;
    };
  });
