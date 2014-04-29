'use strict';

/**
 * --------------------------------------------
 * Specific to timeline formatting
 * --------------------------------------------
 *
 */

angular
  .module('ultraApp')
  .factory('timeline', [function() {

    var items = [];

    // returns number or occurrences of single year in array of years 
    function countByYear(items, year) {
      var count = _.countBy(items, function(i) {
        return i === year;
      });
      return count.true || 0; // lodash count returns true and false counts
    }
    
    return {
      // specific data format for d3 timeline
      // gets each tag, with a count of the tag
      // occurrences counted for each year. 
      getTagsWithYearlyCount: function() {

        // reduce all projects to single object were 
        // keys are tag names and values are years that tag occured
        // for example: 
        // [{"tagOne": [2011, 2012, 2013]},
        //  {"tagTwo": [2011]}]
        // @todo refactor out into tags
        var mapped = _.reduce(items, function(result, item) {
          _.each(item.tags, function(tag) {
            result[tag] = result[tag] || []; // check for empty array
            result[tag].push(item.year);
          });
          return result;
        }, {});


        // get all years
        var years = _.unique(_.pluck(items, 'year')).sort();

        // return array
        // where each object has key which is tag name
        // and array of values, where x = year and 
        // y = number of occurrences of this tag in this year
        var returnData = _.map(mapped, function(item, key) {
          var xAndYValues = _.map(years, function(year) {
            return {
              x: year,
              y: countByYear(item, year)
            };
          });
          return {
            "key": key,
            "values": xAndYValues
          };
        });

        return returnData;

      },
      getAllProjectsForTimeline: function() {

        var returnData = [];

        _.each(items, function(project, i) {
          project.key = project.title;
          project.values = [{
            x: project.year,
            y: i
          }];
        });

        return items;

      },
     
      // getTags: function() {
      //   var tags = [];
      //   _.each(items, function(item) {
      //     tags = tags.concat(item.tags);
      //   });
      //   var counts = _.groupBy(_.compact(tags));
      //   return _.map(counts, function(item, key) {
      //     return {
      //       tag: key,
      //       count: item.length
      //     };
      //   });
      // }
    };
  }]);