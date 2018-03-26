'use strict';

import $ from 'jquery';
import _ from 'lodash';

function mapMobileToolbar() {
  return _.map($('.m-toolbar-button'), (btn) => {
    $(btn).click( () => {
      $('.m-toolbar-page').hide().removeClass("active");
      if($(btn).hasClass("active")){
        $(btn).removeClass("active");
      }
      else {
        $('#m-toolbar-page-' + btn.id.split("-").pop()).show().addClass("active");
        $('.m-toolbar-button').removeClass("active");
        $(btn).addClass("active");
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
    toolbarBottom = $toolbar.css('bottom');

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

      position();
    }

    $(window)
      .scroll(position)
      .resize(scale);

});


$(document).ready( () => {
  mapMobileToolbar();
});
