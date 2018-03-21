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

var sticky = $('#navbar').offset().top;

window.onscroll = () => {
  if (window.pageYOffset >= sticky) {
    $('#navbar').addClass('sticky');
    $('main').addClass('sticky-content');
  }
  else {
    $('#navbar').removeClass('sticky');
    $('main').removeClass('sticky-content');
  }
}

$(document).ready( () => {
  mapMobileToolbar();
  mapShowMore();
});
