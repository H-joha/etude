$(function () {
  // 헤더 fixed
  $(window)
    .on('scroll resize', function () {
      var st = $(this).scrollTop();
      var winW = $(this).outerWidth();

      if (winW > 768) {
        if (st > 0) {
          $('#header').addClass('fixed');
        } else {
          $('#header').removeClass('fixed');
        }
      } else {
        $('#header').removeClass('fixed');
      }
    })
    .trigger('scroll');

  // 헤더 gnb
  $('#header .gnb>li>a').on('mouseenter', function () {
    $(this).next().addClass('on').parent().siblings().children().removeClass('on');
  });
  $('#header .gnb .depth02').on('mouseleave', function () {
    $('#header .gnb .depth02').removeClass('on');
  });

  // 헤더 전체메뉴
  var btnFlag = true;

  $('#header .util_wrap .btn_menu').on('click', function (e) {
    e.preventDefault();

    if (btnFlag) {
      $(this).addClass('on');
      $('#header .menu_area').addClass('on');
    } else {
      $(this).removeClass('on');
      $('#header .menu_area').removeClass('on');
    }
    btnFlag = !btnFlag;
  });

  // 헤더 검색창
  $('#header .util_wrap .btn_search').on('click', function () {
    $('#header .search_area').addClass('on');
  });
  $('#header .search_area .search_top .btn_close').on('click', function () {
    $('#header .search_area').removeClass('on');
  });

  // 헤더 전체메뉴 sub
  $('#header .menu_area .menu>li>a').on('mouseenter', function () {
    $(this).next().addClass('on').parent().siblings().children().removeClass('on');
  });
  $('#header .menu_area .menu .sub_menu').on('mouseleave', function () {
    $('#header .menu_area .menu .sub_menu').removeClass('on');
  });

  //섹션: main_visual_slide
  var visualSlide = new Swiper('.visual_slide', {
    loop: true,

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  //섹션: main_product_slide
  var productSlide = new Swiper('.product_slide', {
    slidesPerView: 5,

    breakpoints: {
      //타블렛 분기점 : 1024px 이하
      1024: {
        slidesPerView: 3,
      },
      //타블렛 분기점 : 768px 이하
      768: {
        slidesPerView: 2,
      },
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  //섹션: main_makeup_slide
  var makeupSlide = new Swiper('.makeup_slide', {
    slidesPerView: 2,

    breakpoints: {
      //모바일 분기점 : 768px 이하
      768: {
        slidesPerView: 'auto',
      },
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  //섹션: main_soonjung_slide
  var soonjungSlide = new Swiper('.soonjung_slide', {
    // allowTouchMove: false,

    slidesPerView: 2,
    slidesPerColumn: 2,

    breakpoints: {
      //타블렛 분기점 : 1024px 이하
      1024: {
        slidesPerView: 4,
        slidesPerColumn: 1,
      },
      //모바일 분기점 : 768px 이하
      768: {
        slidesPerView: 'auto',
      },
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
});
