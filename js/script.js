$('.smooth-scroll').on('click', function(e){
    e.preventDefault();
    console.log('hi');

    var sectionId = '#' + $(this).data('section');
    console.log(sectionId);
    var sectionHeight = $(sectionId).height();
    console.log(sectionHeight);

    $('body').height(sectionHeight);

    var sectionPosition = $(sectionId).offset().left;
    console.log(sectionPosition);

    $('#site-container').animate({scrollLeft:sectionPosition},800);
});

$('.project-clicked').on('click', function(){
    console.log('clicked');
    $(this).siblings('.portfolio-content').height('100vh');
    $(this).siblings('.portfolio-content').css('padding-top', '120px');
    $(this).siblings('.portfolio-content').css('padding-bottom', '120px');
});
