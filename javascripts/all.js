$(function(){
	$(".versus").addClass("animate");
});
// off canvas menu switch
$(".menu-btn").click(function(){
  $("body").toggleClass("open-menu");
});

//collapse button switch content
// $(".collapse-toggle-button").click(function(){
// 	if($(this).text() == '看更多'){
//            $(this).text('收回去');
//        } else {
//            $(this).text('看更多');
//        }
// });

$(".collapse-toggle-button").click(function(){
	$(this).remove();
});