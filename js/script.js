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
var currentPortfolio = 0;
var navIndicatorPos = $('.smooth-scroll:eq(0)').position().left;
var navIndicatorColor = ['#2accff','#b322c4','#14bf6d','#ffa53b','#ff4a9d','#633cff'];

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
    $('#nav-indicator').css('width','5px');
    $('#nav-indicator').css('background-color', navIndicatorColor[currentNav]);
    setTimeout(function(){
        $('#nav-indicator').css('width','30px');
    },100);
    $('#nav-indicator').css('left', navIndicatorPos);
    $('#site-container').stop().animate({scrollLeft:sectionPosition * currentNav},800);
    },900));

$('.project-clicked').on('click', function(){
    currentPortfolio = $(this).parent().index() - 1;
    console.log(currentPortfolio);
    $(this).siblings('.portfolio-content').addClass('open');
    setTimeout(function(){
        $('.backnav-container').addClass('open');
    },400);

});

$('.close').on('click', function(){
    $('.open').removeClass('open');
    $('.backnav-container').removeClass('open');
});

$('.previous').on('click', function(){
    currentPortfolio = currentPortfolio - 1;
    if ( currentPortfolio < 0 ) {
        currentPortfolio = document.getElementsByClassName('portfolioset').length - 1;
    }
    setTimeout(function(){
        $('.portfolio-content.open').scrollTop('0');
    },300);
    $('.portfolio-content.open').removeClass('open');
    $('.portfolio-content:eq(' + currentPortfolio + ')').addClass('open');
});

$('.next').on('click', function(){
    currentPortfolio = currentPortfolio + 1;
    if ( currentPortfolio > document.getElementsByClassName('portfolioset').length - 1 ) {
        currentPortfolio = 0;
    }
    setTimeout(function(){
        $('.portfolio-content.open').scrollTop('0');
    },300);
    $('.portfolio-content.open').removeClass('open');
    $('.portfolio-content:eq(' + currentPortfolio + ')').addClass('open');
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
