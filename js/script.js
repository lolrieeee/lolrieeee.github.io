function throttle(func,interval) {
    var lastCall = 0;
    return function() {
        var now = Date.now();
        if ( lastCall + interval < now ) {
            lastCall = now;
            return func.apply(this, arguments);
        }
    };
}
/*
$('.smooth-scroll').on('click', function(e){
    e.preventDefault();
    console.log('hi');

    var sectionId = '#' + $(this).data('section');
    console.log(sectionId);
    var sectionHeight = $(sectionId).height();
    console.log(sectionHeight);

    $('body').height(sectionHeight);

    var sectionPosition = $(sectionId).position().left;
    console.log(sectionPosition);

    $('#site-container').stop().animate({scrollLeft:sectionPosition},800);
});
*/

$('.smooth-scroll').on('click', function(e){
    e.preventDefault();
});

$('.smooth-scroll').on('click', throttle(function(){
    console.log('hi');
    console.log('index ' + $(this).index() );
    var sectionId = '#' + $(this).data('section');
    console.log(sectionId);
    /*
    var sectionHeight = $(sectionId).height();
    console.log(sectionHeight);

    $('body').height(sectionHeight);
    */

    var sectionPosition = $(document).width();
    console.log(sectionPosition);

    $('#site-container').stop().animate({scrollLeft:sectionPosition * $(this).index()},800);
},900));

$('.project-clicked').on('click', function(){
    console.log('open');
    $(this).siblings('.portfolio-content').height('100vh');
    $(this).siblings('.portfolio-content').css('padding-top', '120px');
    $(this).siblings('.portfolio-content').css('padding-bottom', '120px');
    $(this).siblings('.portfolio-content').css('box-sizing', 'border-box');
});

$('.close').on('click', function(){
    console.log('close');
    $(this).parents('.portfolio-content').css('box-sizing', 'content-box');
    $(this).parents('.portfolio-content').css('padding-top', '0');
    $(this).parents('.portfolio-content').css('padding-bottom', '0');
    $(this).parents('.portfolio-content').height('0');
});
