$(function(){
	//$(".versus").addClass("animate");

	// off canvas menu switch
	$('.menu-btn').on("click", function(){
		$('body').toggleClass('open-menu');
	});

	//collapse button switch content
	$('.collapse-toggle-button').click(function(){
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
	function affixActive(classname, topoffset) {
		var affixTarget = $(classname);
		if ( affixTarget.length !== 0 ) {
			affixTarget.affix({
				offset: {
					top: affixTarget.offset().top - topoffset
				}
			});
		}
	}
	affixActive('.post-note, .rule-list', 24);

	$('.more-record').on("click", function(){
		$('.record').addClass('open');
		$(this).remove();
	});
});
