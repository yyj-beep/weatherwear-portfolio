$(function() {

/* SmoothWheel */
$("html, body").smoothWheel();

/* Resize */
function resizeWin() {
    var h = $(window).height();
    $("#front").height(h);
}
$(window).on("resize", function() {
    resizeWin();
});
$(window).trigger("resize");

/* Scroll */
$(window).on("scroll", function() {
    var sct = $(window).scrollTop();
    var conTop = $("#contents").offset().top; 
// Front Click
    $("#front #click_arr").click(function() {
        $("html, body").stop().animate({scrollTop:conTop}, 600, "easeOutQuad");
    });
// Top Button
    if(sct < conTop){
        $("#top_btn").removeClass('on');
    } else {
        $("#top_btn").addClass('on');
    }
    $("#top_btn").click(function() {
        $("html, body").stop().animate({scrollTop:0}, 600, "easeOutQuad");
    });
});
$(window).trigger("scroll");
    
})