$(function(){
	//$(".versus").addClass("animate");

	// off canvas menu switch
	$(".menu-btn").on("click", function(){
		$("body").toggleClass("open-menu");
	});

	// collapse remove after click
	$(".collapse-toggle-button").on("click", function(){
		$(this).remove();
	});

	// collapse switch accord dom height
	$('.collapse-content').each(function(){
		if ( $(this).height() < 190 ) {
			$(this).parent().next('.collapse-toggle').remove();
		}
	});
	// affix
	$('.post-note').affix({
		offset: {
			top: $('.post-note').offset().top - 24
		}
	});

});
