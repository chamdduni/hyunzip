$(".profile-box, .menu").click(function () {
  $(".user-hover-box").addClass("active");
});

$(".body").click(function () {
  $(".user-hover-box").removeClass("active");
});

$(".profile-box, .menu").click(function() {
  return false;
});




$(".plan1 .travel-plan-box>li").click(function() {
  $(this).siblings(".close").find(".a-box").stop().slideUp(300);
  $(this).siblings(".close").removeClass("close");
});

$(".plan1  .travel-plan-box > li").click(function() {
  if($(this).hasClass("close")) {
    $(this).find(".a-box").stop().slideUp(300);
    $(this).removeClass("close");
  }
  else {
    $(this).find(".a-box").stop().slideDown(300);
        $(this).addClass("close");
  }
});

$(".a-box, .travel-date-title, .travel-number-title ").click(function() {
  return false;
});