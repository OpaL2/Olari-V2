'use strict';

import $ from 'jquery';
import _ from 'lodash';

// function mapMobileToolbar() {
//   return _.map($('.m-toolbar-button'), (btn) => {
//     $(btn).click( () => {
//       $('.m-toolbar-page').hide().removeClass("active");
//       if($(btn).hasClass("active")){
//         $(btn).removeClass("active")
//       }
//       else {
//         $('#m-toolbar-page-' + btn.id.split("-").pop()).show().addClass("active").animate({top: '0'});
//         $('.m-toolbar-button').removeClass("active");
//         $(btn).addClass("active");
//       }
//     });
//   });
// }

function mapMobileToolbar() {
  return _.map($('.m-toolbar-button'), (btn) => {
    $(btn).unbind('click.olariv2');

      var $btn = $(btn);
      var $page = $('#m-toolbar-page-' + btn.id.split("-").pop())
      var $btns = $('.m-toolbar-button');

    $btn.bind('click.olariv2', () => {
      var $activePages = $('.m-toolbar-page.active');

      if($btn.hasClass('active-btn')) {
        $page.slideUp(100);
        $btn.addClass('active-btn');
      }

      else if ($activePages.length !== 0) {
        $activePages.slideUp(100);
        $btns.removeClass('active-btn');
        $btn.addClass('active-btn');
        $page.addClass('active').slideDown(500);
      }

      else {
        $btn.addClass('active-btn')
        $page.addClass('active').slideDown(500);
      }
    });
  });
}

var sticky_navbar = $('#navbar').offset().top;

$(window).bind("load", () => {
  var $header = $('#navbar'),
    headerHeight = 0,
    headerTop = 0,
    $footer = $('#footer'),
    footerHeight = 0,
    footerTop = 0,
    $content = $('#content'),
    $toolbar = $("#mobile-toolbar"),
    toolbarHeight = 0,
    toolbarTop = 0;

    scale();
    mapMobileToolbar();

    function position() {

      if ($(window).scrollTop() >= headerTop) {
        $header.addClass('sticky-navbar');
        $content.css('padding-top', headerHeight);
      }
      else {
        $header.removeClass('sticky-navbar');
        $content.css('padding-top', 0);
      }

      if($(window).scrollTop() + $(window).height() >= footerTop + footerHeight) {
        $footer.addClass('sticky-footer');
        $content.css('padding-bottom', footerHeight);
      }
      else {
        $footer.removeClass('sticky-footer');
        $content.css('padding-bottom',0);
      }

    }

    function scale() {

      

      $header.removeClass('sticky-navbar');
      $content.css('padding-top',0);
      $footer.removeClass('sticky-footer');
      $content.css('padding-bottom',0);

      headerHeight = $header.height();
      headerTop = $header.position().top;
      footerHeight = $footer.height();
      footerTop = $footer.position().top;
      toolbarHeight = $toolbar.height();
      toolbarTop = $toolbar.position().top;

      position();
    }

    $(window)
      .scroll(position)
      .resize(scale);

});
