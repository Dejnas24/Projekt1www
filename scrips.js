$(document).ready(function() {
	
	
	$("p, h1, h2, h3, h4, a, img, form, button").hide().fadeIn(5000);
	
	var NavY = $('.menu-top').offset().top;
	 
	var stickyNav = function(){
	var ScrollY = $(window).scrollTop();
		  
	if (ScrollY > NavY) { 
		$('.menu-top').addClass('sticky');
	} else {
		$('.menu-top').removeClass('sticky'); 
	}
	};
	 
	stickyNav();
	 
	$(window).scroll(function() {
		stickyNav();
		
		
		
	});
	
	
	
	});
	
	$(window).scroll(function()
	{
		if($(this).scrollTop()>300) $('.przewijanie').fadeIn();
		else $('.przewijanie').fadeOut();
	});
	
	jQuery(function($)
	{
	$.scrollTo(0);
	$('#link1').click(function(){ $.scrollTo($('#aktualnosci'), 1500)});
	$('#link1a').click(function(){ $.scrollTo($('#wydarzenia'), 1500)});
	$('#link1b').click(function(){ $.scrollTo($('#koncerty'), 1500)});
	$('#link3').click(function(){ $.scrollTo($('#kontaktlink'), 1500)});
	$('#button-1').click(function(){ $.scrollTo($('#aktualnosci'), 1500)});
	$('#button-2').click(function(){ $.scrollTo($('#wpisy'), 1500)});
	
	$('.przewijanie').click(function(){ $.scrollTo($('body'), 2000)});
	}
	);
	