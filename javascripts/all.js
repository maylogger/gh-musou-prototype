$(function(){
	//$(".versus").addClass("animate");

	// off canvas menu switch
	$(".menu-btn").on("click", function(){
		$("body").toggleClass("open-menu");
	});

	$(".collapse-toggle-button").on("click", function(){
		$(this).remove();
	});

	var affixTrigger = function() {
		var pageWidth = $(document).width();
		$("[data-affix-item]").trigger("sticky_kit:detach");
		if ( pageWidth >= 900) {
			$("[data-affix-item]").stick_in_parent({parent: "[data-affix-parent]"}).trigger("sticky_kit:recalc");
		}
	};
	$(document).ready(affixTrigger);
	$(window).resize(affixTrigger);

});
