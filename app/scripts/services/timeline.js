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
    this.formatProjectTagsForTimeline = function(allProjects) {

      // reduce all projects to single object were 
      // keys are tag names and values are years that tag occurred
      // for example: 
      // [{"tagOne": [2011, 2012, 2013]},
      //  {"tagTwo": [2011]}]
      // @todo refactor out into tags
      var tagsAndYearArrays = _.reduce(allProjects, function(result, project) {
        _.each(project.tags, function(tag) {
          result[tag] = result[tag] || []; // check for empty array
          result[tag].push(project.year);
        });
        return result;
      }, {});

      // get range of years from projects
      var years = _.unique(_.pluck(allProjects, 'year')).sort();

      // return array
      // where each object has key which is tag name
      // and array of values, where x = year and 
      // y = number of occurrences of this tag in this year
      var returnData = _.map(tagsAndYearArrays, function(item, key) {
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

    };


    this.formatProjectsForTimeline = function() {

      var returnData = [];

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
