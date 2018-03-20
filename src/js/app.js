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


$(document).ready( () => {
  mapMobileToolbar();
});


