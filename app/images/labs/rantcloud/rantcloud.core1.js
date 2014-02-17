$(document).ready(function(){

	/*
	//	Thanks to http://blog.kiskolabs.com/post/5602656614/responsive-jquery-slideshow
	//  for helping me figure out the javascript and css to make this work
	*/
		
		var isMoving;	
		var timeMove;
		var moveSpeed = 2400;
		
		$('#m_images img:gt(0)').hide();
			
		var fadeImages = function(){
      		$('#m_images :first-child').stop( true, true ).fadeOut()
         	.next('img').fadeIn()
         	.end().appendTo('#m_images');
         }
		
		timeMove = setInterval(fadeImages, moveSpeed);
	


});









 





