import React from 'react';
import Media from 'react-media';

import { Link } from 'react-router-dom';

import container from 'components/containers/Container';

import CalendarListView from 'components/templates/CalendarListView';
import CalendarMonthView from 'components/templates/CalendarMonthView';

import moment from 'moment';
import _ from 'lodash/collection';


class Calendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      today: moment(),
      view: moment(this.props.match.params.day + '-' + this.props.match.params.month + '-' + this.props.match.params.year, 'DD-MM-YYYY')
    }

    this.backMonth = this.backMonth.bind(this);
    this.forwardMonth = this.forwardMonth.bind(this);
  }

  backMonth() {
    this.setState((prevState, props) => {
      return {view: prevState.view.clone().subtract(1, 'months').date(1)};
    })
  }

  forwardMonth() {
    this.setState((prevState, props) => {
      return {view: prevState.view.clone().add(1, 'months').date(1)};
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({view: moment(nextProps.match.params.day + '-' + nextProps.match.params.month + '-' + nextProps.match.params.year, 'DD-MM-YYYY')})
  }

  render() {
    const selected = moment(this.props.match.params.day + '-' + this.props.match.params.month + '-' + this.props.match.params.year, 'DD-MM-YYYY');
    return(
    <div id="calendar-wrapper">
      <CalendarPageNavigation
        selected={selected.clone()}
        today={this.state.today}
        back={this.backMonth}
        forward={this.forwardMonth}
      />
      <SubscribeButton url={this.props.data.settings.calendar ? this.props.data.settings.calendar.icsURL : null} />
      <Media query="(min-width: 992px)">
        {largeScreen => largeScreen
          ?
            <CalendarMonthView events={this.props.data.calendar} selected={selected.clone()} view={this.state.view} />
          :
            <CalendarListView events={this.props.data.calendar} selected={selected.clone()} view={this.state.view} />
        }
      </Media>
      <CalendarPageNavigation
        selected={selected.clone()}
        today={this.state.today}
        back={this.backMonth}
        forward={this.forwardMonth}
      />
      <SubscribeButton url={this.props.data.settings.calendar ? this.props.data.settings.calendar.icsURL : null} />
    </div>
    );
  }
}

export default container(Calendar);

class CalendarPageNavigation extends React.Component {

  render() {
    return(
      <div className="btn-group pr-1 px-md-2">
        <button className="btn btn-outline-secondary" onClick={this.props.back}><i className="fas fa-angle-double-left" /></button>
        <Link className="btn btn-outline-secondary" to={this.props.today.format("/YYYY/MM/DD")}>Tänään</Link>
        <button className="btn btn-outline-secondary" onClick={this.props.forward}><i className="fas fa-angle-double-right" /></button>
      </div>
    );
  }
}

const SubscribeButton = (props) => {
  return(
    <div className="btn-group px-md-2">
      <a className="btn btn-outline-secondary" href={props.url}>tilaa</a>
    </div>
  );
}


