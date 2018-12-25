$(document).ready(function(){
	
	// Вызов слайдера owl-carousel
	$("#top-slider").owlCarousel({
		singleItem: true,
		theme: "top-slider-theme"
	});


	$("#agent-slider").owlCarousel({
		singleItem: true,
		theme: "agent-slider-theme"
	});

	$("#testimonial-slider").owlCarousel({
		singleItem: true,
		navigation: true,
		navigationText:	["",""],
		theme: "testimonial-slider-theme"
	});

	
});

