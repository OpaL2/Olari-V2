import React from 'react';
import ReactDOM from 'react-dom';

import SearchForm from 'components/templates/SearchForm';
import container from 'components/containers/Container';

import flow from 'lodash/fp/flow';
import sortBy from 'lodash/fp/sortBy';
import filter from 'lodash/fp/filter';
import slice from 'lodash/fp/slice';
import map from 'lodash/fp/map';
import find from 'lodash/fp/find';

import moment from 'moment';
moment.locale('fi');

class DesktopSidebar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <React.Fragment>
        {ReactDOM.createPortal(
            <DesktopMenuRender
              menuLocations={this.props.data.menuLocations}
              menus={this.props.data.menus}
              menuName="primary"
            />
          ,document.getElementById('main-navigation'))}
          <SearchForm 
            siteAddress={this.props.data.settings.siteAddress}
          />
          <ContactInfoRender
            content={this.props.data.settings}
          />
          <CalendarRender
            vCalendar={this.props.data.calendar}
            calendar={this.props.data.settings.calendar}
          />
          <HandoutRender
            posts={this.props.data.handoutPosts}
            category={this.props.data.settings.infoCategoryID}
          />
      </React.Fragment>
    );
  }
}

export default container(DesktopSidebar);

const DesktopMenuRender = (props) => {
  const location = props.menuLocations ? props.menuLocations[props.menuName] : null;
  const ID = location ? location.ID : null;
  const menu = ID && props.menus ? find({ID: ID})(props.menus) : null;
  const items = menu ? menu.items : null;
  return items ? <NavbarMenuRender items={items} /> : null;
}

const NavbarMenuRender = (props) => {
  const Content = props.items.map((item) => {
    return(
      <a key={item.id} className="nav-item nav-link text-info" href={item.url}>{item.title}</a>
    );
  });
  return(
    <React.Fragment>
      {Content}
    </React.Fragment>
  );
}

const ContactInfoRender = (props) => {
  const contactInfo = props.content ? props.content.contactInfo : null;
  return contactInfo ? (
    <div className="card mt-3 border-0">
      <div className="card-header bg-white border-0 mb-0 pb-0">
        <h3 className="card-title mb-0 pb-0">Yhteystiedot</h3>
      </div>
      <nav className="nav flex-column card-body">
        {contactInfo.email ? (<a className="nav-item nav-link ml-0 pl-0" href={"mailto:" + contactInfo.email}><i className="far fa-envelope" /> {contactInfo.email}</a>) : null}
        {contactInfo.phone ? (<a className="nav-item nav-link ml-0 pl-0" href={"tel:" + contactInfo.phone}><i className="fas fa-phone"/> {contactInfo.phone}</a>) : null}
        {contactInfo.address ? (<a className="nav-item nav-link ml-0 pl-0" href={contactInfo.locationUrl}><i className="fas fa-map-marker-alt"/> {contactInfo.address}</a>) : null}
        {contactInfo.pageID ? (<a className="nav-item nav-link ml-0 pl-0" href={'/?p=' + contactInfo.pageID}>Kaikki yhteystiedot <i className="fas fa-angle-double-right" /></a>) : null}
      </nav>
    </div>
    ) : null;
}

const HandoutRender = (props) => {
  return props.posts ? (
    <div className="card mt-3 border-0">
      <div className="card-header bg-white border-0 mb-0 pb-0">
        <h3 className="card-title mb-0 pb-0">Tiedotteet</h3>
      </div>
      <div className="card-body">
      {props.posts.map((post) => {
        return(
          <div key={post.id} className="mb-4">
            <a className="card-title card-link" href={post.link}><h5>{post.title.rendered}</h5></a>
            <h6 className="card-subtitle small text-info">{moment(post.date).format('DD.MM.YYYY')}</h6>
            <p className="card-text" dangerouslySetInnerHTML={{__html:post.content.rendered}} />
          </div>
        );
      })}
        <a className="card-link" href={'/?cat=' + props.category}>Näytä kaikki <i className="fas fa-angle-double-right"/></a>
      </div>
    </div>
    ) : null;
}

const CalendarRender = (props) => {
  return props.vCalendar && props.calendar ? (
    <div className="card mt-3 border-0">
      <div className="card-header bg-white border-0 mb-0 pb-0">
        <h3 className="card-title mb-0 pb-0">Kalenteri</h3>
      </div>
      <div className="card-body">
      <Calendar
        events={props.vCalendar}
        calendarPage={props.calendar.pageURL}
      />
      <a className="card-link pt-3" href={props.calendar.pageURL}>Näytä kalenteri <i className="fas fa-angle-double-right"/></a>
      </div>
    </div>
  ) : null;
}

const Calendar = (props) => {
  const EventComponents = flow(
      filter( (e) => { return e.start > moment() } ),
      sortBy( (e) => { return e.start }),
      slice(0, 5),
      map( (e) => { return( <CalEvent event={e} key={e.key} calendarPage={props.calendarPage} /> )})
    )(props.events)

  return(
    <ul className="list-group m-0 p-0 border-0">
      {EventComponents}
    </ul>
  );
}

const CalEvent = (props) => {
  return(
    <li className="list-group-item mx-0 px-0 border-0">
      <div className="small text-info">{props.event.start.format('ddd DD.MM.YY')}
      {props.event.allDay ? null : (
        <span className="badge badge-secondary float-right">{props.event.start.format('HH:mm')}</span>
      )}
      </div>
      <a href={props.calendarPage + '#' +props.event.url}>{props.event.title}</a>
    </li>
  );
}