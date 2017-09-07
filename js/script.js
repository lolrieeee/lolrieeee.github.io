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

var currentNav = 0;

$('.smooth-scroll').on('click', function(e){
    e.preventDefault();
});

$('.smooth-scroll').on('click', throttle(function(){
    console.log('hi');
    console.log('index ' + $(this).index() );
    var sectionId = '#' + $(this).data('section');
    console.log(sectionId);

    var sectionPosition = $(document).width();
    console.log(sectionPosition);
    $(sectionId).scrollTop('0');
    currentNav = $(this).index();
    $('#site-container').stop().animate({scrollLeft:sectionPosition * currentNav},800);
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

$(window).on('resize', function(){
    $('#site-container').scrollLeft('0');
    var sectionPosition = $(document).width();
    $('#site-container').scrollLeft(sectionPosition * currentNav );
});
