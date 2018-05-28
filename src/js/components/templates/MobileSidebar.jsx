import React from 'react';
import ReactDOM from 'react-dom';

import SearchForm from 'components/templates/SearchForm';
import container from 'components/containers/Container';

import _ from 'lodash/collection';

function toggledSidebar (Sidebar) {
  return class extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        menu: false,
        calendar: false,
        handout: false,
        contact: false
      }

      this.toggleMenu = this.toggleMenu.bind(this);
      this.toggleCalendar = this.toggleCalendar.bind(this);
      this.toggleHandout = this.toggleHandout.bind(this);
      this.toggleContact = this.toggleContact.bind(this);
    }

    toggleMenu() {
      this.setState((prev, props) => {
        return {
          menu: !prev.menu,
          calendar: false,
          handout: false,
          contact: false
        }
      });
    }

    toggleCalendar() {
      this.setState((prev, props) => {
        return {
          menu: false,
          calendar: !prev.calendar,
          handout: false,
          contact: false
        }
      });
    }

    toggleHandout() {
      this.setState((prev, props) => {
        return {
          menu: false,
          calendar: false,
          handout: !prev.handout,
          contact: false
        }
      });
    }

    toggleContact() {
      this.setState((prev, props) => {
        return {
          menu: false,
          calendar: false,
          handout: false,
          contact: !prev.contact
        }
      });
    }

    render() {
      return <Sidebar 
        visibility={this.state}
        toggle={
          {
            contact:this.toggleContact,
            handout:this.toggleHandout,
            menu:this.toggleMenu,
            calendar:this.toggleCalendar
          }
        }
        {...this.props} />
    }
  }
}

export { toggledSidebar };

const MobileSidebar = (props) => {
    return ReactDOM.createPortal(
      <React.Fragment>
        <div className="btn-group btn-group-lg w-100" role="group">
          <NavToggler action={props.toggle.handout} isActive={props.visibility.handout}>
            <i className="fas fa-info" />
          </NavToggler>
          <NavToggler action={props.toggle.calendar} isActive={props.visibility.calendar}>
            <i className="far fa-calendar-alt" />
          </NavToggler>
          <NavToggler action={props.toggle.contact} isActive={props.visibility.contact}>
            <i className="fas fa-address-book" />
          </NavToggler>
          <NavToggler action={props.toggle.menu} isActive={props.visibility.menu}>
            <i className="fas fa-bars" />
          </NavToggler>
        </div>
        <SidebarElements
          visibility={props.visibility}
          data={props.data}
        />
      </React.Fragment>
      , document.getElementById('react-tablet-root'));
}

export default container(toggledSidebar(MobileSidebar));

const NavToggler = (props) => {
  return(
      <button onClick={props.action} className={props.isActive ? "btn btn-outline-secondary active w-25" : "btn btn-outline-secondary w-25"}>{props.children}</button>
  ); 
}

const SidebarElements = (props) => {
  return(
    <React.Fragment>
        <MenuRender
          visible={props.visibility.menu}
          menus={props.data.menus}
          menuLocations={props.data.menuLocations}
          menuName="primary"
          siteAddress={props.data.settings.siteAddress}
        />
        <ContactInfoRender
          visible={props.visibility.contact}
          content={props.data.settings}
        />
        <HandoutRender
          visible={props.visibility.handout}
          posts={props.data.handoutPosts}
          category={props.data.settings.infoCategoryID}
        />
        <CalendarRender
          visible={props.visibility.calendar}
          vCalendar={props.data.calendar}
          calendarPage={props.data.settings.calendarPageUrl}
        />
    </React.Fragment>
  );
}

export { SidebarElements };

const MenuRender = (props) => {
  if(!props.visible) return null;
  const location = props.menuLocations ? props.menuLocations[props.menuName] : null;
  const ID = location ? location.ID : null;
  const menu = ID && props.menus ? _.find(props.menus, {ID: ID}) : null;
  const items = menu ? menu.items : null;
  return items ? <VerticalMenuRender items={items} siteAddress={props.siteAddress} /> : null;
}

const VerticalMenuRender = (props) => {
  const Content = props.items.map((item) => {
    return(
      <a key={item.id} className="nav-item nav-link" href={item.url}> {item.title} <i className="fas fa-angle-double-right"/></a>
    );
  });
  return (
      <nav className="my-2 nav flex-column">
        {Content}
        <span className="nav-item">
          <SearchForm
          siteAddress={props.siteAddress}
          />
        </span>
      </nav>
  );
}

const ContactInfoRender = (props) => {
  if(!props.visible) return null;
  const contactInfo = props.content ? props.content.contactInfo : null;
  return contactInfo ? (
      <nav className="nav flex-column my-2 bg-white rounded">
        {contactInfo.email ? (<a className="nav-item nav-link" href={"mailto:" + contactInfo.email}><i className="far fa-envelope" /> {contactInfo.email}</a>) : null}
        {contactInfo.phone ? (<a className="nav-item nav-link" href={"tel:" + contactInfo.phone}><i className="fas fa-phone"/> {contactInfo.phone}</a>) : null}
        {contactInfo.address ? (<a className="nav-item nav-link" href={contactInfo.locationUrl}><i className="fas fa-map-marker-alt"/> {contactInfo.address}</a>) : null}
        {contactInfo.pageID ? (<a className="nav-item nav-link" href={'/?p=' + contactInfo.pageID}>Kaikki yhteystiedot <i className="fas fa-angle-double-right" /></a>) : null}
      </nav>
    ) : null;
}

const HandoutRender = (props) => {
  if(!props.visible) return null;
  return props.posts ? (
      <nav className="nav flex-column my-2 bg-white rounder">
      {props.posts.map((post) => {
        return(
          <a key={post.id} className="nav-item nav-link" href={post.link}> {post.title.rendered} <i className="fas fa-angle-double-right"/></a>
        );
      })}
      <a className="nav-item nav-link" href={'/?cat=' + props.category}>Näytä kaikki <i className="fas fa-angle-double-right"/></a>
      </nav>
    ) : null;
}

const CalendarRender = (props) => {
  return props.vCalendar && props.visible ? (
    <div className="my-2 bg-white rounded">

      <Calendar
        events={props.vCalendar}
        calendarPage={props.calendarPage}
      />
          <a className="mt-4 p-3 pt-5" href={props.calendarPage}>Näytä kalenteri <i className="fas fa-angle-double-right"/></a>
    </div>
  ) : null;
}

const Calendar = (props) => {
  const futureEvents = _.sortBy(_.filter(props.events, (event) => {
    return event.start > new Date();
  }), (event) => {return event.start}).slice(0,5);
  const EventComponents = futureEvents.map((event) => {
    return( <CalEvent event={event} key={event.key} calendarPage={props.calendarPage} />)
  });

  return(
    <ul className="list-group border-0">
      {EventComponents}
    </ul>
  );
}

const CalEvent = (props) => {
  return(
    <li className="list-group-item border-0">
      <div className="small">{props.event.start.format('ddd DD.MM.YY')}
      {props.event.allDay ? null : (
        <span className="badge badge-secondary float-right">{props.event.start.format('HH:mm')}</span>
      )}
      </div>
      <a href={props.calendarPage + '#' + props.event.url}>{props.event.title}</a>
    </li>
  );
}

