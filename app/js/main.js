$(document).ready(function ($) {
<<<<<<< HEAD
    window.addEventListener('scroll', onScroll);
=======


    

	window.addEventListener('scroll', onScroll);

>>>>>>> 6b946ee520f7f348c20a7f4cef607dbd7b5798ce
    function onScroll(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
            shrinkOn = 30;
        if (distanceY > shrinkOn) {
            $("header" ).addClass("scrolled");
        } else {
            $("header" ).removeClass("scrolled");
<<<<<<< HEAD
        }
    }
    onScroll();
=======
            //$(".logo-cont img").attr("src", "images/index/logo.png");
        }
    }
    onScroll();
    
	var menuVisible = false;
    $(".toggle-button" ).click(function(){
        
        if (!menuVisible) 
        {
            $(".mobile-menu-cont").slideToggle();
            $(".toggle-button" ).addClass("open");
            menuVisible = true;
        }
        else
        {
            $(".mobile-menu-cont").slideToggle();
            $(".toggle-button" ).removeClass("open");
            menuVisible = false;
        }
    });
>>>>>>> 6b946ee520f7f348c20a7f4cef607dbd7b5798ce
    
    
    $(".mobile_menu").simpleMobileMenu({
        "menuStyle": "slide",
    });

    $(".floating-form-button").on('click', function(event) {
        $(".floating-form").addClass('shown');
        $(".floating-form-button").removeClass('shown');
    });

<<<<<<< HEAD
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
=======
    $(".mobile-menu .sub-menu").each(function( index ) {
        var mainMenuItem = $(this).parent(".menu-item"); 
        var arrow = jQuery("<div class='open-arrow'><span>&#x25BC;</span></div>"); 
        $(mainMenuItem).append(arrow);   

       
        $(arrow).click(function(){
            $(mainMenuItem).find('ul.sub-menu').slideToggle();
            $(arrow).toggleClass("rotate");
        });
    });

    
    
});$(document).ready(function ($) {

    $(window).on('resize', function(){
          onResize();
    });
    onResize();

    function onResize()
    {
        var win = $(window);
    }
    
});
>>>>>>> 6b946ee520f7f348c20a7f4cef607dbd7b5798ce
