'use strict';

angular
  .module('ultraApp')
  .factory('timeline', function() {

    // {
    //   year: 2014,
    //   tags: [''],
    //   title: "",
    //   desc: ""
    // }

    var items = [{
      year: 2014,
      tags: ['openFrameworks'],
      title: "ofxAddons co-maintainer",
      desc: "Began helping maintain and categorize new ofxAddons"
    }, {
      year: 2014,
      tags: ['openFrameworks'],
      title: "MIT Transform Table",
      desc: "Developed software interface for MIT shape shifting table"
    }, {
      year: 2014,
      tags: ['LEGO', 'event'],
      title: "Competed in LEGOLand Discovery Center's Brick Factor",
      desc: "Placed in the top 10, and while I didn't get the job, I did get the experience of a lifetime!"
    }, {
      year: 2013,
      tags: ['api', 'angularjs', 'mongodb', 'nodejs', 'ui', 'app', 'develop'],
      title: "LeaseRep, powered by MarlinApps",
      desc: "Worked with Marlin Leasing, a fortune 500 company, to bring to life a new vision for their quoting and applications tools. We developed a platform using a modern stack."
    }, {
      year: 2013,
      tags: ['website', 'develop', 'apostrophe'],
      title: "Fiore Design Wesbite",
      desc: "Developed website for local design firm."
    }, {
      year: 2013,
      tags: ['angularjs', 'firebase', 'develop', 'design', 'ui'],
      title: "CrocktoberFest Voting App",
      desc: "Co-developed angularJS voting app using FireBase to provide real-time backend. App allowed multiple judges to vote for multiple contestants."
    }, {
      year: 2013,
      tags: ['api', 'ios', 'app', 'visualize', 'ui', 'design', 'develop'],
      title: "BizVizz: Corporate Accountability App",
      desc: "Early user experience and API / web development to support this award winning app."
    }, {
      year: 2013,
      tags: ['real-time', 'instagram', 'api', 'nodejs', 'develop'],
      title: "My Favorite Meme",
      desc: "Real time instagram API app that let users contribute their favorite meme"
    }, {
      year: 2013,
      tags: ['html5', 'game', 'develop', 'design'],
      title: "Town of Songs 2",
      desc: "Developed new version of the experience for the new release!"
    }, {
      year: 2012,
      tags: ['website', 'jQuery', 'plugins', 'templating', 'ui'],
      title: "BDDW",
      desc: "Website for furniture site. Developed multiple jQuery plugins to make it happen."
    }, {
      year: 2012,
      tags: ['html5', 'game', 'develop', 'design'],
      title: "Town of Songs 1",
      desc: "Developed HTML5 interactive experience for the band's new album. Used Construct 2 to develop the game."
    }, {
      year: 2012,
      tags: ['platform', 'scale', 'cloud', 'php', 'develop'],
      title: "Blank You Very Much",
      desc: "Co-developed crowd-sourced design platform for client. Over 2.5 million page views in 2013, 6000+ daily page views, 32,000+ users, 3 million points awarded. <a href='http://www.blankyouverymuch.com'>blankyouverymuch.com</a>"
    }, {
      year: 2012,
      tags: ['api', 'socketio', 'realtime', 'app', 'develop'],
      title: "Poasty API",
      desc: "Develop realtime, instagram-like API for sharing photos and posts."
    }, {
      year: 2012,
      tags: ['gamification', 'api', 'realtime', 'develop'],
      title: "Poasty Gamify",
      desc: "Developed activity stream class modeled after research into Facebook and Etsy activity feed design patterns. Developed gamify class that awards badges based on number of actions, certain action combinations, and other configurations."
    }, {
      year: 2011,
      tags: ['kinect', 'openFrameworks', 'design', 'develop'],
      title: "Faculty Kinect",
      desc: "Distorted company logo thorough Kinect user interactions."
    }, {
      year: 2011,
      tags: ['event'],
      title: "Started Work at Faculty Creative",
      desc: "Toymakers of digital products and platforms"
    }, {
      year: 2011,
      tags: ['demonstration', 'exhibition', 'collaboration', 'openFrameworks'],
      title: "The Tech Virtual, San Jose, CA : PIXEL Installation and Public Gallery Installation",
      desc: "Presented and had exhibit installed with collegue at musuem"
    }, {
      year: 2011,
      tags: ['website', 'design', 'develop'],
      title: "mmWorks (personal website from 2010-2014)",
      desc: "My personal website for a few years"
    }, {
      year: 2011,
      tags: ['event', 'thesis'],
      title: "Masters of Industrial Design",
      desc: "Graduated with a degree in human centered design. Thesis here! Thinkering!"
    }, {
      year: 2011,
      tags: ['graphics', 'design', 'collaboration', 'openFrameworks'],
      title: "Graduate Show",
      desc: "Designed exhibit posters for eye tracking installation."
    }, {
      year: 2011,
      tags: ['openFrameworks', 'liveCode', 'app'],
      title: "Thinkering Stories (Fleisher Art Class)",
      desc: "Developed OpenframeWorks app that used FERN tracking to connect drawings to stories."
    }, {
      year: 2011,
      tags: ['teaching', 'event', 'collaboration'],
      title: "Started Teaching Gadgets and Kinetics",
      desc: "Working with Fleisher Art Memorial, MID@UArts, and The Hacktory, and collegue Jake Well, started an after school class for children ages 8-10 years old. We created many projects designed to cultivate systematic creativity."
    }, {
      year: 2011,
      tags: ['LEGO', 'fabrication', 'design'],
      title: "LEGO Workshop",
      desc: "Researching for my thesis, I explored the LEGO digital designer and decided to make my graduate fab shop a reality. If we can get kids building these new manufacturing machines, they will begin to understand how they work. <a href='/projects/lego-fabrication-shop'>Explore the workshop</a>"
    }, {
      year: 2010,
      tags: ['demonstration', 'build', 'develop'],
      title: "Museums and the Web Conference; Eye Tracking With Your MacBook",
      desc: "Hacking against eye tracking software for your macbook laptop"
    }, {
      year: 2010,
      tags: ['design', 'collaboration', 'build'],
      title: "Air Cooperation",
      desc: "Design charrette where i worked with a team of grad and undergrad to design a musical collaboration tool."
    }, {
      year: 2010,
      tags: ['design', 'develop', 'website'],
      title: "MID@Uarts Website",
      desc: "Developed website for graduate program (summer)"
    }, {
      year: 2009,
      tags: ['hackathon', 'design', 'develop', 'collaboration'],
      title: "RantCloud",
      desc: "Baltimore hackathon entry with colleges Jake and Mike. Used a speech to text service to capture users voice mail responses to a question we asked."
    }, {
      year: 2009,
      tags: ['design', 'website', 'campaign', 'collaboration'],
      title: "Cheers, Philly",
      desc: "Website to promote local consumption of local beer!"
    }, {
      year: 2009,
      tags: ['event', 'exhibition', 'collaboration'],
      title: "Collaboration: A Love Story",
      desc: "A play to investigate collaboration in our school"
    }, {
      year: 2009,
      tags: ['research', 'open-source', 'collaboration'],
      title: "Open-Source Eye Tracking Research",
      desc: "Started Hacking the Eye Writer and OpenFrameWorks software"
    }, {
      year: 2009,
      tags: ['design', 'collaboration', 'education'],
      title: "StudioNEXT",
      desc: "A look at design education of the future!"
    }, {
      year: 2008,
      tags: ['website', 'develop'],
      title: "ResourceLA site",
      desc: "Website for Los Angelus based talent agency. Collaboration with Cheng+Snyder."
    }, {
      year: 2008,
      tags: ['design', 'branding', 'campaign'],
      title: "Smithville Barber Shoppe",
      desc: "Great website for great client."
    }, {
      year: 2008,
      tags: ['design', 'exhibition'],
      title: "A Cut Above",
      desc: "Final project for my undergraduate design degree."
    }];

    // Instagram clock? 
    // Portfolio share? 
    // Gridster arrange
    // angular Unsaved Changes
    // http://www.shakingthrough.com/
    // Liberty resources? 
    // Info graphics galore! 

    return {
      groupItemsByYear: function(selectItems) {
        var grouped = _.groupBy(selectItems, 'year');
        return _.map(grouped, function(items, key) {
          return {
            year: key,
            items: items
          };
        });
      },
      getAllItemsGroupedByYear: function() {
        return this.groupItemsByYear(items);
      },
      getAllItems: function() {
        return items;
      },
      getTags: function() {
        var tags = [];
        _.each(items, function(item) {
          tags = tags.concat(item.tags);
        });
        var counts = _.groupBy(_.compact(tags));
        return _.map(counts, function(item, key) {
          return {
            tag: key,
            count: item.length
          };
        });
      }
    };
  });
