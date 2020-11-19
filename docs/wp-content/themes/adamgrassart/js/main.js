jQuery(document).ready(function($){
    
/* Animation Ground Head section
   ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■  */

    // (function groundHeadSection() {
    //     $('.l-headSection').animate({
    //         'background-position': '+=170'
    //     }, 8000, 'linear', groundHeadSection);
    // }());



/* Responsive menu
   ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■  */
	
	respMenu = $("#js-menu-reponsive");
	$('.js-responsive').children().clone().appendTo(respMenu);
    $("#js-menu-reponsive").children().removeClass() // ul
                           .children().removeClass(); // ul li
    $("#js-menu-reponsive").prepend('<div class="resp_menu_header"><p>Menu</p></div>')

    $("#js-menu-reponsive").on("click", function(){
       $(this).animate({'height':'260'},200);
    });

    $("#js-menu-reponsive").on("mouseleave",function(){
        console.log("test");
        $(this).animate({'height':'46'},200);
    });


/* Animation background vidéo  
   ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■  */

// —•—•—  —•—•—
    $('document').ready(function() {
    var options = { videoId: 'OMdXXbb3fPI', start: 0 };
    $('#wrapper').tubular(options);
    });



/* Accordeon
   ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■  */

   if( jQuery.isFunction($( ".js-accordion" ).accordion)){
    $( ".js-accordion" ).accordion({ active: 0 ,  header: "h2", heightStyle: "content" });
   }



});





