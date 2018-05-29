import React from 'react';

import { Route, Link } from 'react-router-dom';

import _ from 'lodash';

//import moment from 'moment';

class CalendarMonthView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="calendar" className="my-3">
        <h3>{this.props.view.format('MMMM YYYY')}</h3>
        <div className="row my-3">
          <Month selected={this.props.selected.clone()} {...this.props}/>
        </div>
        <div className="row my-3">
          <EventList
            selected={this.props.selected.clone()}
            events={filterEventsOnDate(this.props.events, this.props.selected.clone())}
          />
          <Route exact path={this.props.selected.format('/YYYY/MM/DD/') + ':key'} render={
            props => (<ExpandedEvent events={this.props.events} {...props} />)
          } />
        </div>
      </div>
    );
  }
}

export default CalendarMonthView;

const Month = (props) => {
  const firstDay = props.view.clone().startOf('month');
  const endDay = props.view.clone().endOf('month');
  const numOfWeeks = endDay.weekday(6).diff(firstDay.weekday(0), 'weeks');
  const Weeks = _.range(firstDay.week(), firstDay.week() + numOfWeeks + 1).map( (n) => {
    return(
      <Week
        key={n}
        weekNumber={n}
        firstDay={firstDay}
        {...props}
      />
    );
  });

  const Weekdays = _.range(7).map( (n) => {
    return(
      <th key={n}>
        {props.view.clone().weekday(n).format('ddd')}
      </th>
    );
  });

  return(
    <table className="w-100">
      <thead>
        <tr style={{width:14 + '%'}}>
          {Weekdays}
        </tr>
      </thead>
      <tbody>
        {Weeks}
      </tbody>
    </table>
  );
}

const Week = (props) => {
  const startDate = props.firstDay.clone().week(props.weekNumber).weekday(0);

  const Days = _.range(7).map( (n) => {
    const date = startDate.clone().weekday(n);
    return(
      <Day
        key={date.format('YYYYMMDD')}
        selected={props.selected}
        date={date}
        events={filterEventsOnDate(props.events, date)}
      />
    );
  });

  return(
    <tr>
    {Days}
    </tr>
  );
}

const Day = (props) => {

  const classes = props.date.isSame(props.selected, 'day') ? "nav-link disabled m-0 p-0" : "nav-link m-0 p-0";

  const Events = props.events.map( (event) => {
    return (
      <DayEvent
        key={event.key}
        event={event}
        active={props.date.isSame(props.selected, 'day')}
      />
    );
  });

  return (
    <td className="border p-1">
      <Link to={props.date.format('/YYYY/MM/DD')} className={classes} style={{height:'92px', width: '100%'}}>
        <div className="small">{props.date.format('DD.MM')}</div>
        {Events}
      </Link>
    </td>
  );
}

const DayEvent = (props) => {
  const title = props.event.title.length < 11 ? props.event.title.substring(0,11) : props.event.title.substring(0, 8) + '...';
  return(
  <div className={props.active ? "w-100 small nav-link disabled m-0 p-0" : "w-100 small text-info nav-link m-0 p-0"}>
    {title}
  </div>
  );
}

const EventList = (props) => {

  const Events = props.events.map((event) => {
    return (
      <Event
        key={event.key}
        event={event}
        selected={props.selected}
      />
    );
  });

  return (
    <div className="col-6 card border-0 mt-3">
      <div className="card-header bg-white border-0 m-0 p-0">
        <h3 className="card-title m-0 px-0 pb-3">{props.selected.format('dddd DD.MM.YYYY')}</h3>
      </div>
    <ul className="card-body list-group m-0 p-0 border-top">
      {Events}
    </ul>
    </div>
  );
}

const Event = (props) => {

  return (
    <li className="list-group-item border-right-0 border-left-0 mx-0 px-0">
      <Link to={props.selected.format('/YYYY/MM/DD/') + props.event.key}>{props.event.title}</Link>
      {props.event.allDay ? null : (
        <span className="badge badge-secondary float-right">{props.event.start.format('HH:mm')}</span>
      )}
    </li>
  );
}

const ExpandedEvent = (props) => {

  const event = _.find(props.events, {key: props.match.params.key});

  return event ? ( 
    <div className="col-6 card border-0 mt-3">
      <div className="card-header bg-white border-0 m-0 p-0">
        <h3 className="card-title">{event.title}</h3>
        <h6 className="card-subtitle font-weight-light text-info">{event.allDay ? (event.start.isSame(event.end.clone().subtract(1, 'day')) ? event.start.format('ddd DD.MM.YYYY') : event.start.format('ddd DD.MM.YYYY - ') + event.end.clone().subtract(1, 'day').format('ddd DD.MM.YYYY') ) : event.start.format('DD.MM.YYYY HH:mm') + (event.start.isSame(event.end, 'day') ? event.end.format(' - HH:mm') : event.end.format(' - DD.MM.YYYY HH:mm'))} </h6>
      </div>
      <div className="card-body m-0 p-0">
        {event.content}
      </div>
    </div>
  ) : (
    null
  );
}

function filterEventsOnDate(events, date) {
  return _.filter(events, (event)=> {
    return event.allDay ? event.start.isSameOrBefore(date, 'day') && event.end.isAfter(date, 'day') : event.start.isSame(date, 'day') || (event.start.isBefore(date, 'day') && event.end.isSameOrAfter(date, 'day'));
  });
}
