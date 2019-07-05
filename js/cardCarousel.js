$(document).ready(function() {
  // $('.coupon_carousel').owlCarousel({
  //     loop:false,
  //     margin: 5,
  //     nav:true,
  //     dots: false,
  //     responsive:{
  //         0:{
  //             items:1
  //         },
  //         600:{
  //             items:2
  //         },
  //         1000:{
  //             items:3
  //         }
  //     }
  // })




  // $("#menu-icon").click(function(){ 
  //       $(".collapse").toggleClass("show");
  //       $("body").toggleClass("hide");
  //       $(".page").toggleClass("scroll");
  // });

    $('.data').waypoint(function(direction){
      $('.number1').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: 21
          }, {
              duration: 1000,              
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
      });
      $('.number2').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: 1000
          }, {
              duration: 1000,              
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
      });
      $('.number3').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: 750
          }, {
              duration: 1000,              
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
      });
      $('.number4').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: 4
          }, {
              duration: 1000,              
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
      });
      waypoint.destroy();
    }, {      
      offset: '85%'
    });

    $('.features').waypoint(function(direction){
      $('.feature_card').addClass('fadeIn');
      },{
        offset: '90%'
      });


    $('.ios').waypoint(function(direction) {
      $('.mockup1').addClass('moveDown');
      $('.mockup2').addClass('moveUp');
    },{
      offset: '70%'
    });

      // $('.android').waypoint(function(direction) {
      //   $('.android_screen').addClass('pop');
      // },{
      //   offset: '95%'
      // });

    $('.banner').waypoint(function(direction) {
      $('.banner .get_quote').addClass('shake');
    },{
      offset: 'bottom-in-view'
    });

     //  $(".client_logo img").each(function(index){
     //     $(this).css({
     //          'transition-delay' : s*(1+index) + 's'
     //     });
     // });
});

function openTab(deviceTab, num) {
  var i;
  var x = document.getElementsByClassName("device");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(deviceTab).style.display = "block";  
  var n = document.getElementsByClassName(num);
  $('.device_tab').removeClass('active');
  $(n).addClass('active');
}
