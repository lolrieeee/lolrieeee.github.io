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
var navIndicatorPos = $('.smooth-scroll:eq(0)').position().left;

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
    navIndicatorPos = $('.smooth-scroll:eq(' + currentNav + ')').position().left;
    $('#nav-indicator').css('left', navIndicatorPos);
    $('#site-container').stop().animate({scrollLeft:sectionPosition * currentNav},800);
    },900));

$('.project-clicked').on('click', function(){
    console.log('open');
    $(this).siblings('.portfolio-content').addClass('open');
    setTimeout(function(){
        $('.backnav-container').addClass('open');
    },400);

});

$('.close').on('click', function(){
    console.log('close');
    $('.open').removeClass('open');
    $('.backnav-container').removeClass('open');
});

$(window).on('resize', function(){
    $('#site-container').scrollLeft('0');
    var sectionPosition = $(document).width();
    $('#site-container').scrollLeft(sectionPosition * currentNav );
    navIndicatorPos = $('.smooth-scroll:eq(' + currentNav + ')').position().left;
    $('#nav-indicator').css('left', navIndicatorPos);
});


console.log( $('.smooth-scroll:eq(0)').position() );
$('#nav-indicator').css('left', navIndicatorPos);
