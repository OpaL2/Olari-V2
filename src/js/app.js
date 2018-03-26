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
    $(btn).bind('click.olariv2', () => {
      var $btn = $(btn);
      var $page = $('#m-toolbar-page-' + btn.id.split("-").pop())
      var $activePages = $('.m-toolbar-page.active');
      var $btns = $('.m-toolbar-button');
      var height = $('#mobile-toolbar').height();
      var hideHeight = height - $page.height();

      if($btn.hasClass('active')) {
        $page.animate({bottom: hideHeight}, 500, () => {
          $page.hide().removeClass('active');
          $btn.removeClass('active');
        });
      }

      else if ($activePages.length !== 0) {
        $activePages.animate({bottom: hideHeight}, 0, () => {
          $activePages.hide().removeClass('active');
          $btns.removeClass('active');
          $btn.addClass('active')
          $page.show().css('bottom', hideHeight).addClass('active').animate({bottom: height}, 500);
        });
      }

      else {
        $btn.addClass('active')
        $page.show().css('bottom', hideHeight).addClass('active').animate({bottom: height}, 500);

      }
    });
  });
}

var sticky_navbar = $('#navbar').offset().top;

$(window).bind("load", () => {
  var $header = $('#navbar'),
    headerHeight = $header.height(),
    headerTop = $header.position().top,
    $footer = $('#footer'),
    footerHeight = $footer.height(),
    footerTop = $footer.position().top,
    $content = $('#content'),
    $toolbar = $("#mobile-toolbar"),
    toolbarHeight = $toolbar.height(),
    toolbarTop = $toolbar.position().top;

    scale();

    function position() {

      if ($(window).scrollTop() >= headerTop) {
        $header.addClass('sticky-navbar');
        $content.css('padding-top', headerHeight);
      }
      else {
        $header.removeClass('sticky-navbar');
        $content.css('padding-top', 0);
      }

      if($(window).scrollTop() + $(window).height() >= footerTop + footerHeight+ toolbarHeight) {
        $footer.addClass('sticky-footer');
        $content.css('padding-bottom', footerHeight + toolbarHeight);
      }
      else {
        $footer.removeClass('sticky-footer');
        $content.css('padding-bottom',0);
      }

    }

    function scale() {
      mapMobileToolbar();

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

      $footer.css('margin-bottom', toolbarHeight);

      position();
    }

    $(window)
      .scroll(position)
      .resize(scale);

});
