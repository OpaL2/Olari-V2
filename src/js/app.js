'use strict';

import $ from 'jquery';
import _ from 'lodash';

function mapMobileToolbar() {
  return _.map($('.m-toolbar-button'), (btn) => {
    $(btn).click( () => {
      $('.m-toolbar-page').hide().removeClass("active");
      $(btn).toggleClass("active");
      if($(btn).hasClass("active")){
        $('#m-toolbar-page-' + btn.id.substr(-1)).show().addClass("active");
      }
    });
  });
}


$(document).ready( () => {
  mapMobileToolbar();
});


