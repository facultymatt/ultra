$(document).ready(function(){
	
	/* .a_tool can be any object itself, there is no internal object*/
	$("#map_workshop > .a_tool").each( function() {
			var e = $(this);
			var link = e.attr("title");
			e.attr("title", "");
			link = $("#i_" + link);
			
			console.log(link);
			var time;
			var timeIn;
			
			
			e.click(function(event) { event.preventDefault(); e.blur() } );
						
			e.hover(
				function(ee) {
					clearTimeout(time);
					timeIn = setTimeout(function() { link.fadeIn(300); link.css("z-index", 10);  }, 180 );
					//ee.preventDefault();
					//e.focus();
			
				},
				function(ee) {
					clearTimeout(timeIn);
					time = setTimeout(function() { link.fadeOut(200); link.css("z-index", 1); }, 180 );	
					//ee.preventDefault();
					//e.blur();
				});
			
			link.hover(
				function(ee) {
					clearTimeout(time);
					//ee.preventDefault();
					//e.focus();
				},
				function(ee) {
					time = setTimeout(function() { link.fadeOut(200); link.css("z-index", 1); }, 180 );	
					//ee.preventDefault();
					//e.focus();
				});
			
		});

});









 





