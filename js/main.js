/*
 * © Bugaev Ivan
 * This code is protected by copyright.
*/

function BivAlignment() {
    windowHeight = $(window).height();
    headerHeight = $('#header').height();
    contentHeight = $('#content').height();
    footerHeight = $('#footer').height();
    if( windowHeight > (headerHeight+contentHeight+footerHeight) ) {
        $('.biv-content').css({'height': windowHeight+'px'});
        contentOffset = (windowHeight - headerHeight - contentHeight - footerHeight)/2;
        $('#content').css({'padding': contentOffset+'px 0px 0px 0px'});
        $('#footer').addClass('fixed');
    }
}

BivAlignment();

function BivAlignmentRestart() {
    $('#footer').removeClass('fixed');
    $('#content').css({'padding': ''});
    $('.biv-content').css({'height': ''});
    windowHeight = $(window).height();
    headerHeight = $('#header').height();
    contentHeight = $('#content').height();
    footerHeight = $('#footer').height();

    if( windowHeight > (headerHeight+contentHeight+footerHeight) ) {
        $('.biv-content').css({'height': windowHeight+'px'});
        contentOffset = (windowHeight - headerHeight - contentHeight - footerHeight)/2;
        $('#content').css({'padding': contentOffset+'px 0px 0px 0px'});
        $('#footer').addClass('fixed');
    }
}

$(function() {
  $(window).resize(function() {
    BivAlignmentRestart();
  });
});