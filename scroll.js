
// $(document).ready(function() {
//    $('#nav').localScroll({duration:800});
// });


$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});



  


