'use strict';

angular.module('ultraApp')
  .provider('Category', function() {
    this.$get = function(Tag) {

      function Category(options) {

        var _this = this;

        _this.name = options.name || '';
        _this.baseColorScheme = options.baseColorScheme || ['', ''];
        _this.tags = options.tags || [];

        // create color scale using chroma.js
        var scale = chroma
          .scale(_this.baseColorScheme)
          .domain([0, _this.tags.length], _this.tags.length);

        // set group colors
        _this.color = scale(0).hex();
        _this.baseColor = scale(0).hex();

        // set group slug
        _this.slug = _this.name.toLowerCase();

        // create our "has many" relationship
        _.each(_this.tags, function(tagName, i) {

          var tag = new Tag({
            active: false,
            name: tagName,
            slug: tagName,
            count: 0,
            color: scale(i).hex(),
            baseColor: scale(0).hex()
          });

          // overwrite _this tag string with a tag object
          _this.tags[i] = tag;

        });

        return _this;
      }

      return Category;

    };
  });
