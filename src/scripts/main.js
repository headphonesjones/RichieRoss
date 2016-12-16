/**
 * Created by magicdrops on 12/12/2016.
 */

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
jQuery(document).ready(function(){
    if( !isMobile.any() ){
        $(window).stellar();
    }
});

$(".first").stick_in_parent();

$(".second").stick_in_parent()
    .on("sticky_kit:stick", function(e) {
        // $(".coolGlasses").attr('src','/dist/images/MOVIE_7-01.gif');
    })
    .on("sticky_kit:unstick", function(e) {
        // $(".coolGlasses").attr('src','/dist/images/MOVIE_7-01.gif');
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