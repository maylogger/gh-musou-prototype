$(function(){
	//$(".versus").addClass("animate");

	// off canvas menu switch
	$(".menu-btn").on("click", function(){
		$("body").toggleClass("open-menu");
	});

	$(".collapse-toggle-button").on("click", function(){
		$(this).remove();
	});

	return $("[data-affix-item]").stick_in_parent({
    parent: "[data-affix-parent]"
  });

});
