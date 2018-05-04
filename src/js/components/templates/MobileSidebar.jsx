import React from 'react';
import ReactDOM from 'react-dom';

import SearchForm from 'components/templates/SearchForm';

import _ from 'lodash/collection';

class MobileSidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visibleMenu: false,
      visibleCalendar: false,
      visibleHandout: false,
      visibleContact: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleCalendar = this.toggleCalendar.bind(this);
    this.toggleHandout = this.toggleHandout.bind(this);
    this.toggleContact = this.toggleContact.bind(this);
  }

  toggleMenu() {
    this.setState((prev, props) => {
      return {
        visibleMenu: !prev.visibleMenu,
        visibleCalendar: false,
        visibleHandout: false,
        visibleContact: false
      }
    });
  }

  toggleCalendar() {
    this.setState((prev, props) => {
      return {
        visibleMenu: false,
        visibleCalendar: !prev.visibleCalendar,
        visibleHandout: false,
        visibleContact: false
      }
    });

  }

  toggleHandout() {
    this.setState((prev, props) => {
      return {
        visibleMenu: false,
        visibleCalendar: false,
        visibleHandout: !prev.visibleHandout,
        visibleContact: false
      }
    });
  }

  toggleContact() {
    this.setState((prev, props) => {
      return {
        visibleMenu: false,
        visibleCalendar: false,
        visibleHandout: false,
        visibleContact: !prev.visibleContact
      }
    });
  }

  render() {
    return ReactDOM.createPortal(
      <React.Fragment>
        <div className="btn-group btn-group-lg w-100" role="group">
          <NavToggler action={this.toggleHandout} isActive={this.state.visibleHandout}>
            <i className="fas fa-info" />
          </NavToggler>
          <NavToggler action={this.toggleCalendar} isActive={this.state.visibleCalendar}>
            <i className="far fa-calendar-alt" />
          </NavToggler>
          <NavToggler action={this.toggleContact} isActive={this.state.visibleContact}>
            <i className="fas fa-address-book" />
          </NavToggler>
          <NavToggler action={this.toggleMenu} isActive={this.state.visibleMenu}>
            <i className="fas fa-bars" />
          </NavToggler>
        </div>

        <MobileMenuRender
          visible={this.state.visibleMenu}
          menus={this.props.data.menus}
          menuLocations={this.props.data.menuLocations}
          menuName="primary"
          siteAddress={this.props.data.settings.siteAddress}
        />
        <ContactInfoRender
          visible={this.state.visibleContact}
          content={this.props.data.settings}
        />
        <HandoutRender
          visible={this.state.visibleHandout}
          posts={this.props.data.handoutPosts}
        />
        <CalendarRender
          visible={this.state.visibleCalendar}
        />
      </React.Fragment>
      , document.getElementById('react-tablet-root'));
  }
}
export default MobileSidebar;

const NavToggler = (props) => {
  return(
      <button onClick={props.action} className={props.isActive ? "btn btn-outline-secondary active w-25" : "btn btn-outline-secondary w-25"}>{props.children}</button>
  ); 
}

const MobileMenuRender = (props) => {
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
      <nav className="nav flex-column">
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
      <nav className="nav flex-column">
        {contactInfo.email ? (<a className="nav-item nav-link" href={"mailto:" + contactInfo.email}><i className="far fa-envelope" /> {contactInfo.email}</a>) : null}
        {contactInfo.phone ? (<a className="nav-item nav-link" href={"tel:" + contactInfo.phone}><i className="fas fa-phone"/> {contactInfo.phone}</a>) : null}
        {contactInfo.address ? (<a className="nav-item nav-link" href={contactInfo.locationUrl}><i className="fas fa-map-marker-alt"/> {contactInfo.address}</a>) : null}
      </nav>
    ) : null;
}

const HandoutRender = (props) => {
  if(!props.visible) return null;
  return props.posts ? (
      <nav className="nav flex-column">
      {props.posts.map((post) => {
        return(
          <a key={post.id} className="nav-item nav-link" href={post.link}> {post.title.rendered} <i className="fas fa-angle-double-right"/></a>
        );
      })}
      </nav>
    ) : null;
}

const CalendarRender = (props) => {
  if(!props.visible) return null;
  return (
    <div className="card">
      <span>Calendar event list will be inserted here</span>
    </div>
  );
}



