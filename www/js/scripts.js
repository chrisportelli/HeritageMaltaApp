$("#nav-toggle").click(function(e){
    e.preventDefault();
    $("body").toggleClass("toggled");
    //$(this).toggleClass("active");
});

$("ul#tickets-main-options li").click(function(){
	var a = $(this).attr("rel");
	$("#"+a).slideToggle();
});

$("li#opt1").click(function(){
	$(".detailed-option").hide();
	$(".chosen-option-calendar").animate({width:'toggle'},350);
});

window.onload = function(){

	var imageSrc = document
					.getElementById('profile-image-landscape')
					 .style
					  .backgroundImage
					   .replace(/url\((['"])?(.*?)\1\)/gi, '$2')
						.split(',')[0];

	// I just broke it up on newlines for readability        

	var image = new Image();
	image.src = imageSrc;

	var img_width = image.width,
	img_height = image.height,
	window_height = $(window).height(),
	window_width = $(window).width();
	if (img_width > window_width){
		$("#profile-image-landscape").css("width", window_width);
	}
	else {
		$("#profile-image-landscape").css("width", img_width).css("margin", "0 auto");
	}
	$("#profile-image-landscape").css("height", img_height).css("background-position", "50%");
}