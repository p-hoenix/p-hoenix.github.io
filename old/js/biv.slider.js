/*
 * © Bugaev Ivan
 * This code is protected by copyright.
*/

var bivSliderAutostart = 1; // enable auto start (1/0)
var bivSliderAutostartTime = 8000; // slide change in seconds
var bivSliderTime = 600; // left scroll speed in seconds

var bivSliderPressing = 0; // system value (do not change)
var bivSliderScrolling = 0; // system value (do not change)
var bivSliderItem = 1; // system value (do not change)
var bivSliderItemsCount = 0; // system value (do not change)
var bivSliderItemPrev = 0; // system value (do not change)

function BivSliderNext() {
    if( bivSliderScrolling == '0' ) {
        windowWidth = $(window).width();
        bivSliderScrolling = '1';
        $('#bivSlide'+bivSliderItem).animate({ left: '0px' }, 0);
        $('#bivSlide'+bivSliderItem).animate({ left: '-'+windowWidth+'px' }, bivSliderTime);
        bivSliderItemPrev = bivSliderItem;

        $('#bivSlidePoint'+bivSliderItem).removeClass('point-active');
        itemNext = bivSliderItem*1+1;
        if( bivSliderItem < bivSliderItemsCount ) {
            bivSliderItem = itemNext;
        } else {
            bivSliderItem = '1';
        }

        $('#bivSlide'+bivSliderItem).animate({ left: windowWidth+'px' }, 0);
        $('#bivSlide'+bivSliderItem).animate({ opacity: '1' }, 0);
        $('#bivSlide'+bivSliderItem).animate({ left: '0px' }, bivSliderTime);

        $('#bivSlidePoint'+bivSliderItem).addClass('point-active');
        setTimeout(function(){
            $('#bivSlide'+bivSliderItemPrev).animate({ opacity: '0' }, 0);
            bivSliderScrolling = '0';
        },bivSliderTime);
    }
}

function BivSliderAutostart() {
    setInterval(function(){
        if( bivSliderPressing == '0' ) {
            BivSliderNext();
        }
    },bivSliderAutostartTime)
}

function BivSliderStart() {
    bivSliderItemsCount = $('.biv-slide').length;
    windowHeight = $(window).height();
    $('.biv-slider').css({'height': windowHeight+'px'});
    var n = 1;
    var pointsList = '';
    $('.biv-slide').each(function(){
        $(this).attr('id', 'bivSlide'+n);
        imgUrl = $(this).data('src');
        if( n != '1' ) {
            $(this).animate({ opacity: '0' }, 0);
        }
        $(this).css({'height': windowHeight+'px','backgroundImage': 'url('+imgUrl+')'});
        pointsList = pointsList + '<span id="bivSlidePoint'+n+'" onclick="BivSliderLoad(\''+n+'\');"></span>';
        n++;
    });

    $( '#bivSliderPoints' ).append( '<div class="biv-slider-nav-point"><div class="biv-slider-nav-point-list">'+pointsList+'</div></div>' );

    $('#bivSlidePoint1').addClass('point-active');

    if( bivSliderAutostart == '1' ) {
        BivSliderAutostart();
    }
}

function BivSliderLoad(id) {
    if( bivSliderScrolling == '0' ) {
        $('#bivSlide'+bivSliderItem).animate({ opacity: '0' }, 0);
        $('#bivSlidePoint'+bivSliderItem).removeClass('point-active');
        $('#bivSlide'+id).css('left', '0px');
        $('#bivSlide'+id).animate({ opacity: '1' }, 0);
        bivSliderItem = id;
        $('#bivSlidePoint'+bivSliderItem).addClass('point-active');
        bivSliderPressing = '1';
    }
}

BivSliderStart();

function BivSliderRestart() {
    windowHeight = $(window).height();
    $('.biv-slider').css({'height': windowHeight+'px'});
    var n = 1;
    $('.biv-slide').each(function(){
        $(this).css({'height': windowHeight+'px'});
        n++;
    });
}

$(function() {
  $(window).resize(function() {
    BivSliderRestart();
  });
});