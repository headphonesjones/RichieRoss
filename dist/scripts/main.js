/**
 * Created by magicdrops on 12/12/2016.
 */

$(window).stellar();

$(".first").stick_in_parent();

$(".second").stick_in_parent()
    .on("sticky_kit:stick", function(e) {
        $(".coolGlasses").attr('src','/dist/images/MOVIE_7-01.gif');
    })
    .on("sticky_kit:unstick", function(e) {
        $(".coolGlasses").attr('src','/dist/images/MOVIE_7-01.gif');
    });
$(".third").stick_in_parent()
    .on("sticky_kit:stick", function(e) {
        $(".third .columns").addClass('hide');
        $(".fourth .logoFg").addClass('show');
        $(".coolGlasses").addClass('hide');

    })
    .on("sticky_kit:unstick", function(e) {
        $(".third .columns").removeClass('hide');
        $(".fourth .logoFg").removeClass('show');
        $(".coolGlasses").removeClass('hide');
    });
$(".fourth .logoFg").stick_in_parent({
    offset_top: 200
});