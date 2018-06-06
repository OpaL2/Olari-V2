import React from 'react';

import PageSubmenu from 'components/templates/PageSubmenu';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const ReactPageSubmenu = (props) => {
  return(
    <Router>
      <Switch>
        <Route path="/:page/:subpage/" component={PageSubmenu} />
        <Route path="/:page/" component={PageSubmenu} />
      </Switch>
    </Router>
  );
}

export default ReactPageSubmenu;