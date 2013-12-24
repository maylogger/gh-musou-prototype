// off canvas menu switch
$(".menu-btn").click(function(){
  $("body").toggleClass("open-menu");
});

//collapse button switch content
$(".collapse-toggle-button").click(function(){
	if($(this).text() == '看更多'){
           $(this).text('看三小');
       } else {
           $(this).text('看更多');
       }
});