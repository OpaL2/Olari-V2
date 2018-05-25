import React from 'react';

import Calendar from 'components/templates/Calendar';

import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import moment from 'moment';
moment.locale('fi');

const ReactCalendar = () => {
  return(
    <Router>
      <Switch>
        <Route path="/tissit" component={Tissit} />
        <Route path="/:year/:month/:day" component={Calendar} />
        <Route path="/">
          <Redirect to={moment().format("/YYYY/MM/DD")} />
        </Route>
      </Switch>
    </Router>
  );
}

export default ReactCalendar;

const Tissit = (props) => {
  return(
    <div id="tissit">
    <span className="display-4">( · )( · )</span>
    </div>
  );
}