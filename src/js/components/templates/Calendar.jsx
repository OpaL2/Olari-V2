import React from 'react';
import Media from 'react-media';


import moment from 'moment';
import _ from 'lodash/collection';

class Calendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: moment(),
      today: moment(),
      view: "month" 
    }

    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.today = this.today.bind(this);
    this.setView = this.setView.bind(this);
    this.nextYear = this.nextYear.bind(this);
    this.prevYear = this.prevYear.bind(this);0
  }

  nextMonth() {
    this.setState((prev, props) => {
      return {show: moment(prev.show).add(1, 'M').date(1)};
    });
  }

  prevMonth() {
    this.setState((prev, props) => {
      return {show: moment(prev.show).subtract(1, 'M').date(1)};
    });
  }

  nextYear() {
    this.setState((prev, props) => {
      return {show: moment(prev.show).add(1, 'Y').date(1)};
    });
  }

  prevYear() {
    this.setState((prev, props) => {
      return {show: moment(prev.show).subtract(1, 'Y').date(1)};
    });
  }

  today() {
    this.setState((prev, props) => {
      return {show: moment(prev.today)};
    });
  }

  setView(view) {
    this.setState({view: view})
  }

  render() {
    return(
      <div> 
      <PageNavigation
        last={this.nextYear}
        prev={this.prevMonth}
        current={this.today}
        currentValue={this.state.show.format("DD.MM.YYYY")}
        next={this.nextMonth}
        first={this.prevYear}
      />
      <ListView
        events={_.sortBy(_.filter(this.props.data.calendar, (event) => {
                              return event.start.isSame(this.state.show, 'month') && event.start.isAfter(this.state.show);
                            }), (event) => {return event.start})}
      />
      <PageNavigation
        last={this.nextYear}
        prev={this.prevMonth}
        current={this.today}
        currentValue={this.state.show.format("DD.MM.YYYY")}
        next={this.nextMonth}
        first={this.prevYear}
      />
      </div>
    );
  }
}

export default Calendar;

const PageNavigation = (props) => {
  return(
    <nav className="btn-group" role="calendar navigation">
      <button aria-label="first" type="button" className="btn btn-outline-secondary" onClick={props.first}><i className="fas fa-angle-double-left" /></button>
      <button aria-label="previous" type="button" className="btn btn-outline-secondary" onClick={props.prev}><i className="fas fa-angle-left"/></button>
      <button aria-label="current" type="button" className="btn btn-outline-secondary" onClick={props.current}>{props.currentValue}</button>
      <button aria-label="next" type="button" className="btn btn-outline-secondary" onClick={props.next}><i className="fas fa-angle-right"/></button>
      <button aria-label="last" type="button" className="btn btn-outline-secondary" onClick={props.last}><i className="fas fa-angle-double-right"/></button>
    </nav>
  );
}

const ViewNavigation = (props) => {
  return(
    <nav className="btn-group float-right" role="calendar view navigation">
      <button aria-label="list" type="button" className={props.currentView === "list" ? "active btn btn-outline-secondary" : "btn btn-outline-secondary"} onClick={props.setListView}>Lista</button>
      <button aria-label="list" type="button" className={props.currentView === "week" ? "active btn btn-outline-secondary" : "btn btn-outline-secondary"} onClick={props.setWeekView}>Viiko</button>
      <button aria-label="list" type="button" className={props.currentView === "month" ? "active btn btn-outline-secondary" : "btn btn-outline-secondary"} onClick={props.setMonthView}>Kuukausi</button>
    </nav>
  );
}

const ListView = (props) => {
  const Components = props.events ? props.events.map((event) => {
   return( <ListViewEvent
      event={event}
      key={event.key}
    />);
  }) : null;
  return (
    <ul className="">
      {Components}
    </ul>
  );
}

const ListViewEvent = (props) => {
  return(
    <li className="p-3 row border-top border-bottom justify-content-center">
      <div className="col-2 ">
        <div className="wm-100" >{props.event.start.format('DD.M.')}</div>
      {props.event.allDay ? null : (
        <div className="w-100">{props.event.start.format('HH:mm') + '-' + props.event.end.format('HH:mm')}</div>
      )}
      </div>
      <a className="col align-self-center" href={props.event.link}>{props.event.title}</a>
    </li>
  );
}