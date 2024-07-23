$(document).ready(function () {
	$(".pf-list").click(function () {
		$(this).siblings(".z-index-5").removeClass("z-index-5");
	});

	$(".pf-list").click(function () {
		if ($(this).hasClass("z-index-5")) {
			$(this).addClass("z-index-5");
			// removeClass로 되어 있으면 다시 클릭할 때 사라짐//
		} else {
			$(this).addClass("z-index-5");
			
		}
	});
  // $(".preview-screen").click(function (){
  //   return false;
  // });
});


$('.pf-list').on('click', function() {
	$(this).addClass('special');
});

