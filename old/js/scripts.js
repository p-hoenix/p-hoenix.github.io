/*
 * © Bugaev Ivan
 * This code is protected by copyright.
*/

var classBody = 'body';

// Loading images

function BivBackgroundImage() {
    $('.biv-background').each(function(){
        imgUrl = $(this).data('src');
        $(this).css({'backgroundImage': 'url('+imgUrl+')'});
    });
}

BivBackgroundImage();

// Terms of use

function BivSetCookie ( name, value, exp_y, exp_m, exp_d, path, domain, secure ) {
    var cookie_string = name + "=" + escape ( value );
    if( exp_y )
    {
        var expires = new Date ( exp_y, exp_m, exp_d );
        cookie_string += "; expires=" + expires.toGMTString();
    }
    if( path )
        cookie_string += "; path=" + escape ( path );
    if( domain )
        cookie_string += "; domain=" + escape ( domain );
    if( secure )
        cookie_string += "; secure";
    document.cookie = cookie_string;
}

function BivGetCookie ( cookie_name ) {
    var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
    if( results )
        return ( unescape ( results[2] ) );
    else
        return null;
}

function BivDeleteCookie( cookie_name ) {
    var cookie_date = new Date ( );
    cookie_date.setTime ( cookie_date.getTime() - 1 );
    document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
}

function BivAgreementLoad() {
    if( BivGetCookie("bivagree") != '1' ) {
        $('#bivAgreement').removeClass('biv-agreement-hidden');
    }
}

function BivAgreementBtn() {
    BivSetCookie("bivagree", "1");
    $('#bivAgreement').addClass('biv-agreement-hidden');
}

BivAgreementLoad();