$(document).ready(function(){

	$(".menu-branch__search--btn").click(function () {
	  	if($.trim($("#search-input").val())== '') {
	  		$(".menu-branch__search--input").css({
	  			"border" : "1px dashed red",
	  			"background" : "#ffe6ea"
	  	});
	  		$("#search-input").focus();
	  	}
    });

    $(".menu-branch__search--input").focusout(function() {
  		$(this).css({
  			"border" : "none",
  			"background" : "white"
  		});
    });

	$(".menu-branch__search--location").click(function() {
		$(".box-location").show();
	});

	$(".location1").click(function() {
		$(".btn--location span").text($(".location1").text());
	});

	$(".location2").click(function() {
		$(".btn--location span").text($(".location2").text());
	});

	$(".js-hamburger").click(function() {
		$(".js-header").toggleClass("header-panel--active");
		$(".js-wrapper").toggleClass("wrapper--active");
		$(".js-header-menu").toggleClass("header-menu-show");
		var scrollTop = $(window)	
		$(document).click(function(e) {
			if(e.pageY > 366) {
				$(".js-header").removeClass("header-panel--active");
				$(".js-wrapper").removeClass("wrapper--active");
				$(".js-header-menu").removeClass("header-menu-show");

			}
		});
	});

	$(".notification-icon").click(function() {
		$(".notification-frame").toggleClass("notification-frame-show");
		$(".notification-img").toggleClass("notification-icon-hidden");
		$(".notification-cancel").toggleClass("notification-cancel-show");
	});

});

$(document).mouseup(function(e){
    $(".box-location").hide();
});



var btn = $('.back-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function() {
  $('html, body').animate({scrollTop:0}, '300');
});