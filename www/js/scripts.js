$("#nav-toggle").click(function(e){
	e.preventDefault();
	$("body").toggleClass("toggled");
	$(this).toggleClass("active");
});