$(function(){
	//$(".versus").addClass("animate");

	// off canvas menu switch
	$(".menu-btn").on("click", function(){
		$("body").toggleClass("open-menu");
	});

	//collapse button switch content
	$(".collapse-toggle-button").click(function(){
		if($(this).text() == '看更多'){
			$(this).text('收回去');
		} else {
			$(this).text('看更多');
		}
	});

	// collapse remove after click
	// $(".collapse-toggle-button").on("click", function(){
	//	$(this).remove();
	// });

	// collapse switch accord dom height
	$('.collapse-content').each(function(){
		if ( $(this).height() < 190 ) {
			$(this).parent().next('.collapse-toggle').remove();
		}
	});

	// affix
	if ( $('.post-note').length !== 0 ) {
		$('.post-note').affix({
			offset: {
				top: $('.post-note').offset().top - 24
			}
		});
	}

	if ( $('.rule-list').length !== 0 ) {
		$('.rule-list').affix({
			offset: {
				top: $('.rule-list').offset().top - 24
			}
		});
	}

});
