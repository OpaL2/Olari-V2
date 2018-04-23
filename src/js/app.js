'use strict';
//Iplicit font awesome icon import
import 'icons';

import React from 'react';
import ReactDOM from 'react-dom';
import DataActions from 'flux/actions/DataActions';

import ReactSidebar from 'components/ReactSidebar';

class App {

  run() {
    DataActions.fetch();
    ReactDOM.render(
        <ReactSidebar />
      , document.getElementById('react-sidebar')
    )
  }
}

new App().run();
