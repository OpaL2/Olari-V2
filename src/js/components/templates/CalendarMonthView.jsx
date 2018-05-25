import React from 'react';

import { Link } from 'react-router-dom';

import _ from 'lodash';

class CalendarMonthView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Month selected={this.props.selected.clone()} {...this.props}/>
      </div>
    );
  }
}

export default CalendarMonthView;

const Month = (props) => {
  const startWeek = props.selected.clone().date(1).week();
  const endWeek = props.selected.clone().date(31).week();

  const Weeks = _.range(startWeek, endWeek + 1).map( (n) => {
    return(
      <Week
        key={n}
        weekNumber={n}
        today={props.today}
        {...props}
      />
    );
  });

  const Weekdays = _.range(7).map( (n) => {
    return(
      <th key={n}>
        {props.selected.clone().weekday(n).format('ddd')}
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
  const startDate = props.selected.clone().week(props.weekNumber).weekday(0);

  const Days = _.range(7).map( (n) => {
    const date = startDate.clone().weekday(n);
    return(
      <Day
        key={date.format('YYYYMMDD')}
        today={props.today}
        selected={props.selected}
        date={date}
        events={_.filter(props.events, (event) => {
          return event.allDay ? event.start.isSameOrBefore(date) && event.end.isAfter(date) : event.start.isSame(date, 'day') || (event.start.isBefore(date, 'day') && event.end.isSameOrAfter(date, 'day'));
        })}
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
  return(
  <div className="w-100 small text-info" style={{}}>
    item with shitload of text
  </div>
  );
}

// const EventList = (props) => {

//   return (

//   );
// }

// const Event = (props) => {

//   return (

//   );
// }

// const ExpandedEvent = (props) => {

//   return(

//   );
// }
