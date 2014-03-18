$(function(){
	$(".word-left, .word-right").addClass("action");

	// off canvas menu switch
	$('.menu-btn').on("click", function(){
		$('body').toggleClass('open-menu');
	});

	// magnific popup for video
	$('.popup-video-trigger').magnificPopup({
		type: 'ajax'
	});

	//collapse button switch content
	$('.collapse-toggle-button').click(function(){
		if($(this).text() == '看更多'){
			$(this).text('收回去');
		} else {
			$(this).text('看更多');
		}
	});

	// collapse switch accord dom height
	$('.collapse-content').each(function(){
		if ( $(this).height() < 300 ) {
			$(this).parent().css("height","auto");
			$(this).parent().next('.collapse-toggle').remove();
		}
	});

	// affix function
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
	affixActive('.post-note', 40);
	affixActive('.rule-list', 24);

	// legislator award record unfold button
	$('.more-record').on("click", function(){
		$('.record').addClass('open');
		$(this).remove();
	});

});
