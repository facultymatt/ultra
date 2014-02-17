$(document).ready(function(){

	/*
	//	Thanks to http://blog.kiskolabs.com/post/5602656614/responsive-jquery-slideshow
	//  for helping me figure out the javascript and css to make this work
	*/
		
	$(function(){
    $('#m_images img:gt(0)').hide();
    setInterval(function(){
      $('#m_images :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('#m_images');}, 
      2400);
	});


});