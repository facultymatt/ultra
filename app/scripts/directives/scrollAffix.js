'use strict';

angular.module('ultraApp')
  .directive("scrollAffix", function($window) {
    return function(scope, element, attrs) {

      // set default point at which nav bar will become affixed
      // this will affix nav bar right away, at 0 scroll
      var thePoint = 50;
      var theElem = null;
      var ourYOffset = null;

      // user has a set a fixed scroll position
      if (attrs.scrollAffixPoint) {

        // cache point at which to affix
        thePoint = parseInt(attrs.scrollAffixPoint, 10);

        // user has set css selector    
      } else if (typeof attrs.scrollAffixSelector === 'string') {

        // using the selector, get and cache the element
        theElem = $(attrs.scrollAffixSelector);

        // if selector doesn't match any element, set back to null
        // this will cause directive to default to thePoint = 0
        if (!theElem.length) {
          theElem = null;
        }

      }


      // function to set affix class
      var checkAffix = function() {

        // if we are working with an element
        // we need to get the elements current height
        if (theElem) {
          thePoint = theElem.height();
        }

        // store the pageYOffset as a copy, so we can manipulate it below
        ourYOffset = this.pageYOffset;

        // check for iOS and Mac OS, where user can scroll negative
        if (ourYOffset < 0) {
          ourYOffset = 0;
        }

        // past the point
        if (ourYOffset >= thePoint) {
          scope.hideVs = true;
          //console.log('More than ' + thePoint);
          element.addClass('affix').removeClass('unaffixed');

          // set the affixed element to be at window top
          if (theElem) {
            element.css({
              top: 0
            });
          }

          // before the point    
        } else {
          scope.hideVs = false;
          //console.log('Less than ' + thePoint);
          element.removeClass('affix').addClass('unaffixed');

          // sets the elements to simulate being
          if (theElem) {
            element.css({
              top: thePoint
            });
          }
        }
        scope.$apply(); // @todo do we need this for real? 
      };


      // Run once, just to set things up
      // checkAffix();


      // bind check affix function
      // will set the element to fixed based on thePoint
      // @todo debounce, with optional debounce time
      angular.element($window).bind("scroll", checkAffix);
      angular.element($window).bind("resize", checkAffix);

    };
  });
