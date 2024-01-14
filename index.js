/*PROJETO FEITO COM JS E JQuery*/

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navigation').addClass("sticky");
        }else{
            $('.navigation').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scrool-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
});
        if(this.scrollY > 500){
            $('.scrool-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
        $('.scroll-up-btn').click(function(){
            $('html').animate({scrollTop: 0}); 
        });
 
     $('.carousel').owlCarousel({
        margin:20,
        loop:true, 
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
