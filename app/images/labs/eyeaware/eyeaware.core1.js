$(document).ready(function(){
	
	
	$("#map_workshop > .a_tool").each( function() {
			var e = $(this);
			var link = e.attr("title");
			e.attr("title", "");
			link = $("#i_" + link);
			
			console.log(link);
			var time;
			var timeIn;
			
						
			e.hover(
				function(ee) {
					clearTimeout(time);
					timeIn = setTimeout(function() { link.fadeIn(300); link.css("z-index", 10);  }, 200 );
					ee.preventDefault();
			
				},
				function(ee) {
					clearTimeout(timeIn);
					time = setTimeout(function() { link.fadeOut(200); link.css("z-index", 1); }, 200 );	
					ee.preventDefault();
				});
			
			link.hover(
				function(ee) {
					clearTimeout(time);
					ee.preventDefault();
				},
				function(ee) {
					time = setTimeout(function() { link.fadeOut(200); link.css("z-index", 1); }, 200 );	
					ee.preventDefault();
				});
			
		});

});









 





