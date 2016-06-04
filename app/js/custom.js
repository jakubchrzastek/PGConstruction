$("#scrolltop").click(function() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 900);
        
});

$("#cialo").click(function() {
    $('html, body').animate({
         scrollTop: $("#cialo").offset().top - 65
    }, 1500);
       
});

$("#cialo2").click(function() {
    $('html, body').animate({
         scrollTop: $("#cialo2").offset().top - 65
    }, 1500);
       
});
    
$('#Carousel').carousel({
        interval: 3000
});