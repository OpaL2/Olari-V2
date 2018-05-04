import React from 'react';
import ReactDOM from 'react-dom';

import SearchForm from 'components/templates/SearchForm';

import _ from 'lodash/collection';

class TabletSidebar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visibleSearch: false,
      visibleCalendar: false,
      visibleHandout: false,
      visibleContact: false
    }

    this.toggleSearch = this.toggleSearch.bind(this);
    this.toggleCalendar = this.toggleCalendar.bind(this);
    this.toggleHandout = this.toggleHandout.bind(this);
    this.toggleContact = this.toggleContact.bind(this);
  }

  toggleSearch() {
    this.setState((prev, props) => {
      return {
        visibleSearch: !prev.visibleSearch,
        visibleCalendar: false,
        visibleHandout: false,
        visibleContact: false
      }
    });
  }

  toggleCalendar() {
    this.setState((prev, props) => {
      return {
        visibleSearch: false,
        visibleCalendar: !prev.visibleCalendar,
        visibleHandout: false,
        visibleContact: false
      }
    });

  }

  toggleHandout() {
    this.setState((prev, props) => {
      return {
        visibleSearch: false,
        visibleCalendar: false,
        visibleHandout: !prev.visibleHandout,
        visibleContact: false
      }
    });
  }

  toggleContact() {
    this.setState((prev, props) => {
      return {
        visibleSearch: false,
        visibleCalendar: false,
        visibleHandout: false,
        visibleContact: !prev.visibleContact
      }
    });
  }

  render() {
    return(
      <React.Fragment>
        {
          ReactDOM.createPortal(
            <div className="navbar-nav">
              <TabletMenuRender
                menus={this.props.data.menus}
                menuLocations={this.props.data.menuLocations}
                menuName="primary"
              />
            </div>
          , document.getElementById('main-navigation'))
        }
        {
          ReactDOM.createPortal(
        <div className="btn-group-vertical btn-group-lg" role="group">
          <NavToggler action={this.toggleHandout} isActive={this.state.visibleHandout}>
            <i className="fas fa-info" />
          </NavToggler>
          <NavToggler action={this.toggleCalendar} isActive={this.state.visibleCalendar}>
            <i className="far fa-calendar-alt" />
          </NavToggler>
          <NavToggler action={this.toggleContact} isActive={this.state.visibleContact}>
            <i className="fas fa-address-book" />
          </NavToggler>
          <NavToggler action={this.toggleSearch} isActive={this.state.visibleSearch}>
            <i className="fas fa-search" />
          </NavToggler>
        </div>
        , document.getElementById('react-mobile-root'))
        }
        {
          ReactDOM.createPortal(
            <React.Fragment>
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
        <SearchRender
          visible={this.state.visibleSearch}
          siteAddress={this.props.data.settings.siteAddress}
        />
            </React.Fragment>
          , document.getElementById('react-tablet-root'))
        }

      </React.Fragment>
    );
  }
}

export default TabletSidebar;

const NavToggler = (props) => {
  return(
      <button onClick={props.action} className={props.isActive ? "btn btn-outline-secondary active" : "btn btn-outline-secondary"}>{props.children}</button>
  ); 
}


const TabletMenuRender = (props) => {
  const location = props.menuLocations ? props.menuLocations[props.menuName] : null;
  const ID = location ? location.ID : null;
  const menu = ID && props.menus ? _.find(props.menus, {ID: ID}) : null;
  const items = menu ? menu.items : null;
  return items ? <NavbarMenuRender items={items} /> : null;
}

const NavbarMenuRender = (props) => {
  const Content = props.items.map((item) => {
    return(
      <a key={item.id} className="nav-item nav-link" href={item.url}>{item.title}</a>
    );
  });
  return(
    <React.Fragment>
      {Content}
    </React.Fragment>
  );
}

const ContactInfoRender = (props) => {
  if(!props.visible) return null;
  const contactInfo = props.content ? props.content.contactInfo : null;
  return contactInfo ? (
    <div className="card my-2">
      <nav className="nav flex-column card-body">
        {contactInfo.email ? (<a className="nav-item nav-link" href={"mailto:" + contactInfo.email}><i className="far fa-envelope" /> {contactInfo.email}</a>) : null}
        {contactInfo.phone ? (<a className="nav-item nav-link" href={"tel:" + contactInfo.phone}><i className="fas fa-phone"/> {contactInfo.phone}</a>) : null}
        {contactInfo.address ? (<a className="nav-item nav-link" href={contactInfo.locationUrl}><i className="fas fa-map-marker-alt"/> {contactInfo.address}</a>) : null}
      </nav>
    </div>
    ) : null;
}

const HandoutRender = (props) => {
  if(!props.visible) return null;
  return props.posts ? (
    <div className="card my-2">
      {props.posts.map((post) => {
        return(
          <div key={post.id} className="card-body">
            <a className="h5 card-title card-link" href={post.link}>{post.title.rendered}</a>
            <p className="card-text" dangerouslySetInnerHTML={{__html:post.content.rendered}} />
          </div>
        );
      })}
    </div>
    ) : null;
}

const CalendarRender = (props) => {
  if(!props.visible) return null;
  return (
    <div className="card my-2">
      <span>Calendar event list will be inserted here</span>
    </div>
  );
}

const SearchRender = (props) => {
  if(!props.visible) return null;
  return (
    <SearchForm 
      siteAddress={props.siteAddress}
    />
  );
}