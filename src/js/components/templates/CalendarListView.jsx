import React from 'react';

import { Route, Link, Switch } from 'react-router-dom';

import _ from 'lodash/collection';

class CalendarListView extends React.Component {

  render() {
    return(
      <div id="calendar" className="my-3">
        <h3>{this.props.view.format('MMMM YYYY')}</h3>
        <Month
          events={filterEventsOnMonth(this.props.events, this.props.view.clone())}
          selected={this.props.selected}
        />
      </div>
    );
  }
}

export default CalendarListView;

const Month = (props) => {
  const Events = props.events.map((e) => {
    return (<EventSelector key={e.key} event={e} />)
  });
  return(
    <ul className="list-group">
      {Events}
    </ul>
  );
}


const EventSelector = (props) => {
  return(
    <Switch>
      <Route 
        exact
        path={props.event.url} 
        render={ renderProps =>
          (<ExpandedEvent event={props.event} />)
        }
      />
      <Route 
        render={ renderProps => 
          (<Event event={props.event} />)
        }
      />
    </Switch>
  );
}

const Event = (props) => {
  return (
    <li className="list-group-item mx-0 px-0 border-left-0 border-right-0">
      <Link to={props.event.url}>
        <h5 className="font-weight-light pt-0 mt-0">{props.event.title}</h5>
        <h6 className="small text-info">{props.event.allDay ? (props.event.start.isSame(props.event.end.clone().subtract(1, 'day')) ? props.event.start.format('ddd DD.MM.YYYY') : props.event.start.format('ddd DD.MM.YYYY - ') + props.event.end.clone().subtract(1, 'day').format('ddd DD.MM.YYYY') ) : props.event.start.format('DD.MM.YYYY HH:mm') + (props.event.start.isSame(props.event.end, 'day') ? props.event.end.format(' - HH:mm') : props.event.end.format(' - DD.MM.YYYY HH:mm'))} </h6>
      </Link>
    </li>
  );
}

const ExpandedEvent = (props) => {
  return (
    <li className="list-group-item mx-0 px-0 border-left-0 border-right-0">
      <Link to={props.event.start.format('/YYYY/MM/DD')}>
        <h5 className="font-weight-light pt-0 mt-0">{props.event.title}</h5>
        <h6 className="small text-info">{props.event.allDay ? (props.event.start.isSame(props.event.end.clone().subtract(1, 'day')) ? props.event.start.format('ddd DD.MM.YYYY') : props.event.start.format('ddd DD.MM.YYYY - ') + props.event.end.clone().subtract(1, 'day').format('ddd DD.MM.YYYY') ) : props.event.start.format('DD.MM.YYYY HH:mm') + (props.event.start.isSame(props.event.end, 'day') ? props.event.end.format(' - HH:mm') : props.event.end.format(' - DD.MM.YYYY HH:mm'))} </h6>
      </Link>
        <p className="text-body">
          {props.event.content}
        </p>
    </li>
  );
}

function filterEventsOnMonth(events, date) {
  return _.filter(events, (event) => {
    return event.start.isSame(date, 'month') || event.end.isSame(date, 'month');
  });
}