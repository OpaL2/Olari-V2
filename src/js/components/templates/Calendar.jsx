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
      today: moment()
    }
  }

  render() {
    const selected = moment(this.props.match.params.day + '-' + this.props.match.params.month + '-' + this.props.match.params.year, 'DD-MM-YYYY');
    console.log(selected);
    return(
    <div>
      <CalendarPageNavigation selected={selected.clone()} today={this.state.today}/>
      <Media query="(min-width: 992px)">
        {largeScreen => largeScreen
          ?
            <CalendarMonthView events={this.props.data.calendar} selected={selected.clone()} today={this.state.today} />
          :
            <CalendarListView {...this.props} today={this.state.today} />
        }
      </Media>
      <CalendarPageNavigation selected={selected.clone()} today={this.state.today} />
    </div>
    );
  }
}

export default container(Calendar);

class CalendarPageNavigation extends React.Component {

  render() {
    const backMonth = this.props.selected.clone().subtract(1, 'months').date(1);
    const frontMonth = this.props.selected.clone().add(1, "months").date(1);
    return(
      <div className="btn-group">
        <Link className="btn btn-outline-secondary" to={backMonth.format("/YYYY/MM/DD")}><i className="fas fa-angle-double-left" /></Link>
        <Link className="btn btn-outline-secondary" to={this.props.today.format("/YYYY/MM/DD")}>{this.props.selected.format("DD.MM.YYYY")}</Link>
        <Link className="btn btn-outline-secondary" to={frontMonth.format("/YYYY/MM/DD")}><i className="fas fa-angle-double-right" /></Link>
      </div>
    );
  }
}
