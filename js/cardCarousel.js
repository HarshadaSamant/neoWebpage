$(document).ready(function() {
  $('.coupon_carousel').owlCarousel({
      loop:false,
      margin: 5,
      nav:true,
      dots: false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  })

    $('.coupon_category_carousel').owlCarousel({
      loop:false,
      nav:true,
      dots: false,
      responsive:{
          0:{
            items:1
          },
          500:{
              items:2
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  })

    $('.hot_offer_carousel').owlCarousel({
      loop:false,
      margin: 30,
      nav:true,
      dots: false,
      responsive:{
          0:{
            items:1
          },
          400:{
              items:2
          },
          700:{
              items:3
          },
          1000:{
              items:3
          }
      }
  })


  $("#menu-icon").click(function(){ 
        $(".collapse").toggleClass("show");
        $("body").toggleClass("hide");
        $(".page").toggleClass("scroll");
  });

  $('.language_list').select2({         
      minimumResultsForSearch: Infinity
  });

      $('.data').waypoint(function(direction){
      // $('.js--wp2').addClass('animated fadeInUp');
        $('.number').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: $(this).text()
          }, {
              duration: 1000,
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
      });
    }, {
      offset: '90%'
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
        offset: '90%'
      });

      $('.android').waypoint(function(direction) {
        $('.android_screen').addClass('pop');
      },{
        offset: '90%'
      });
});

function openTab(deviceTab) {
  var i;
  var x = document.getElementsByClassName("device");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(deviceTab).style.display = "block";  
}


