var size = [window.width,window.height];

$(window).resize(function(){
    window.resizeTo(size[0],size[1]);
});

$("#nav-toggle").click(function(e){
    e.preventDefault();
    $("body").toggleClass("toggled");
    //$(this).toggleClass("active");
});

$('[onclick]').css("cursor", "pointer");
$("ul#tickets-main-options li:first-child, #contact-opt, #language-opt, .full-content .close").css("cursor", "pointer");

$("ul#tickets-main-options li").click(function(){
    var a = $(this).attr("rel");
    $("#"+a).slideToggle();
});

$("#contact-opt, #language-opt").click(function(){
    var a = $(this).attr("rel");
    $("#"+a).show();
    $("body").toggleClass("toggled");
});

$(".full-content .close").click(function(){
    var a = $(this).closest(".full-container").attr("id");
    $("#"+a).hide();
});

window.onload = function(){

    var imageSrc = document
                    .getElementById('profile-image-landscape')
                     .style
                      .backgroundImage
                       .replace(/url\((['"])?(.*?)\1\)/gi, '$2')
                        .split(',')[0];    

    var image = new Image();
    image.src = imageSrc;

    var img_width = image.width,
    img_height = image.height,
    window_height = $(window).height(),
    window_width = $(window).width();
    //alert(img_width + " " + img_height + " " + $(window).height() + " " + $(window).width());
    if (img_width >= window_width){
        $("#profile-image-landscape").css("width", window_width).css("height", img_height).css("background-position", "50%");
    }
    else {
        $("#profile-image-landscape").css("width", img_width).css("margin", "0 auto");
    }
    $("#profile-image-landscape").css("height", img_height);
}