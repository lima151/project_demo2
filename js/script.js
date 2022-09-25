$(function($){
  "use strict";
//menu
  let menu_icon = $('.menu_icon');

  menu_icon.on('click', function(){
    $('#myNav ul').fadeToggle(200);
    $('.logo').toggleClass('logo_left');

  });

//lodebar
$('#lodejq').LineProgressbar({
      percentage: 100,
      ShowProgressCount: true,
      fillBackgroundColor: '#ffca37',
       backgroundColor: '#EEEEEE',
       height: '8px',
       duration: 2000
    });

// banner js
  $('#banner').slick({
    prevArrow: '<i class="fas fa-angle-double-left banner_icon_left"></i>',
    nextArrow: '<i class="fas fa-angle-double-right banner_icon_right"></i>',
  });



  // service_slide js
    $('.service_slide').slick({
        slidesToShow: 3,
        autoplay: true,
        infinite: true,
        arrows: false,
        responsive: [

          {
              breakpoint: 1201,
              settings: {
                slidesToShow: 3
              }
            },
            {
                breakpoint: 993,
                settings: {
                  slidesToShow: 2
                }
              },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1
                }
              },
            {
              breakpoint: 401,
              settings: {
                slidesToShow: 1
              }
            }

          ]
    });


    // portfolio_slide js
      $('.portfolio_slide').slick({
          slidesToShow: 3,
          autoplay: true,
          infinite: true,
          arrows: false,
          responsive: [
            {
                breakpoint: 1401,
                settings: {
                  slidesToShow: 4
                }
              },
            {
                breakpoint: 1201,
                settings: {
                  slidesToShow: 4
                }
              },
              {
                  breakpoint: 993,
                  settings: {
                    slidesToShow: 3
                  }
                },
              {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 2
                  }
                },
              {
                breakpoint: 401,
                settings: {
                  slidesToShow: 1
                }
              }

            ]
      });


  //counterup
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });



    //blog_slider js
    $('.blog_slider').slick({
      slidesToShow: 3,
      centerMode: true,
      centerPadding: '0',
      arrows: false,
      infinite: true,
      autoplay: true,
      speed: 1000,
      responsive: [
        {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3
            }
          },
          {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            },
          {
              breakpoint: 576,
              settings: {
                slidesToShow: 1
              }
            },
          {
            breakpoint: 321,
            settings: {
              slidesToShow: 1
            }
          }

        ]
    });


    // testimonial_content
  $('.testimonial_text_slider').slick({
    arrows: false,
    asNavFor: '.testimonial_img_slider'
  });

  $('.testimonial_img_slider').slick({
    dots : true,
    arrows: false,
    centerMode: true,
    asNavFor: '.testimonial_text_slider',
    centerPadding: '0',
    slidesToShow: 3,
    speed: 2000,
  });

  // brand_full
  $('.brand_slider').slick({
    arrows: false,
    slidesToShow: 5,
    centerMode: true,
    autoplay: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1401,
        settings: {
          slidesToShow: 5
        }
      },
    {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3
        }
      },
      {
          breakpoint: 993,
          settings: {
            slidesToShow: 3
          }
        },
      {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }

      ]
  });




});
