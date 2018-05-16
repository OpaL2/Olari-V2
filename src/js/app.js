'use strict';
//Iplicit fontawesome icon import
import 'icons';
//import masonry
import Masonry from 'masonry-layout';

import React from 'react';
import ReactDOM from 'react-dom';
import DataActions from 'flux/actions/DataActions';

import ReactSidebar from 'components/ReactSidebar';
import ReactCalendar from 'components/ReactCalendar';

class App {

  run() {
    DataActions.fetch();
    ReactDOM.render(
        <ReactSidebar />
      , document.getElementById('react-sidebar')
    );

    const calendar = document.getElementById('react-calendar');
    if(calendar) {
      ReactDOM.render(
        <ReactCalendar />
        , document.getElementById('react-calendar')
      );
    }
  }
}

new App().run();
