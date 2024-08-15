window.onload = function init_main() {
	$(window).scroll(function(){
		var y = $(this).scrollTop();
		$("#goToTop").toggleClass('slide-up', y > 400);

	});
	
	$("#goToTop").click(function(){
		$("html, body").animate({
			scrollTop: 0
		}, 900)
	})

	$(document).ready(function() {
        $("a.delay-link").click(function(event) {
            event.preventDefault();
            var url = $(this).attr("href");
            setTimeout(function() {
                window.location.href = url;
            }, 700);
        });
    });
}

// function init_main() {
// 	$(window).scroll(function () {
// 		var y = $(this).scrollTop();
// 		$("#goToTop").toggleClass('slide-up', y > 400);

// 	});
	
// 	$("#goToTop").click(function () {
// 		$("html, body").animate({
// 			scrollTop: 0
// 		}, 900)
// 	})

// 	$(document).ready(function () {
// 		$("a.delay-link").click(function (event) {
// 			event.preventDefault();
// 			var url = $(this).attr("href");
// 			setTimeout(function () {
// 				window.location.href = url;
// 			}, 1000);
// 		});
// 	});
// }