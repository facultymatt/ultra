'use strict';

/**
 * --------------------------------------------
 * This service handles formatting projects
 * for the timeline. The timeline requires a pre determined
 * format and thus we must massage our project data into this format
 * --------------------------------------------
 *
 */

angular.module('ultraApp')
  .service('Timeline', function Timeline() {

    var items = [];

    // returns number or occurrences of single year in array of years 
    function countByYear(items, year) {
      var count = _.countBy(items, function(i) {
        return i === year;
      });
      return count.true || 0; // lodash count returns true and false counts
    }

    // gets each tag, with a count of the tag
    // occurrences counted for each year. 
    this.formatProjectTagsForTimeline = function(tags, years) {

      // return array
      // where each object has key which is tag name
      // and array of values, where x = year and 
      // y = number of occurrences of this tag in this year
      var returnData = _.map(tags, function(tag) {
        var xAndYValues = _.map(years, function(year) {
          return {
            x: year,
            y: countByYear(tag.years, year)
          };
        });
        return {
          "key": tag.name,
          "color": tag.color,
          "values": xAndYValues
        };
      });

      return returnData;
    };


    this.formatProjectsForTimeline = function() {

      _.each(items, function(project, i) {
        project.key = project.title;
        project.values = [{
          x: project.year,
          y: i
        }];
      });

      return items;

    };

  });