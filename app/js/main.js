$(document).ready(function ($) {
    window.addEventListener('scroll', onScroll);
    function onScroll(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
            shrinkOn = 30;
        if (distanceY > shrinkOn) {
            $("header" ).addClass("scrolled");
        } else {
            $("header" ).removeClass("scrolled");
        }
    }
    onScroll();
    
    
    $(".mobile_menu").simpleMobileMenu({
        "menuStyle": "slide",
    });

    $(".floating-form-button").on('click', function(event) {
        $(".floating-form").addClass('shown');
        $(".floating-form-button").removeClass('shown');
    });

    $(document).click(function(event) { 
        $target = $(event.target);
        if(!$target.closest('.floating-form').length && !$target.closest('.floating-form-button').length ) {
            $(".floating-form").removeClass('shown');
            $(".floating-form-button").addClass('shown');    
        }
    });

    document.addEventListener( 'wpcf7mailsent', function( event ) {
        var inputs = event.detail.inputs;
        thankyouPage = getFieldValueByName(inputs, "thankyou-page");
        if(thankyouPage) window.location = thankyouPage;
    }, false );
});

function getFieldValueByName(ar, name){
    var result = "";
    ar.forEach(function(item) {
        if(item.name == name) result = item.value;
    });
    return result;
}