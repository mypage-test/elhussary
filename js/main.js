$(document).ready(function(){
     $(window).scroll(function() {
         if ($(this).scrollTop() >=500) {
             $('.navbar').addClass("active"); //
            } else if ($(this).scrollTop() >1){
                $('.navbar').removeClass('active');
            }
        });
});
