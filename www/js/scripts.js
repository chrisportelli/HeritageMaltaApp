$("#nav-toggle").click(function(e){
	e.preventDefault();
	$("body").toggleClass("toggled");
	$(this).toggleClass("active");
});

jQuery.fn.positionMe = function () {
    var oH = $(window).height();
    var oW = $(window).width();
    var iH = this.outerHeight();
    var iW = this.outerWidth();

    // When the image is too small so, do nothing
    if(iW>oW && iH>oH){

        // Otherwise, proportionate the image relative 
        // to its container
        if(oH/iH > oW/iW){
            this.css("width", oW);
            this.css("height", iH*(oW/iW))
        } else {
            this.css("height", oH);
            this.css("width", iW*(oH/iH));
        }

    }
    return this;
}

$("#profile-image img").positionMe();