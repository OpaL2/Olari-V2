import React from 'react';
import ReactDOM from 'react-dom';

import SearchForm from 'components/templates/SearchForm';

import Media from 'react-media';

import _ from 'lodash/collection';

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

          
          <CalendarRender

          />
          <ContactInfoRender
            content={this.props.data.settings}
          />
          <HandoutRender
            posts={this.props.data.handoutPosts}
          />
      </React.Fragment>
    );
  }
}

export default DesktopSidebar;

const DesktopMenuRender = (props) => {
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
  const contactInfo = props.content ? props.content.contactInfo : null;
  return contactInfo ? (
    <div className="card mt-3">
      <nav className="nav flex-column card-body">
        {contactInfo.email ? (<a className="nav-item nav-link" href={"mailto:" + contactInfo.email}><i className="far fa-envelope" /> {contactInfo.email}</a>) : null}
        {contactInfo.phone ? (<a className="nav-item nav-link" href={"tel:" + contactInfo.phone}><i className="fas fa-phone"/> {contactInfo.phone}</a>) : null}
        {contactInfo.address ? (<a className="nav-item nav-link" href={contactInfo.locationUrl}><i className="fas fa-map-marker-alt"/> {contactInfo.address}</a>) : null}
      </nav>
    </div>
    ) : null;
}

const HandoutRender = (props) => {
  return props.posts ? (
    <div className="card mt-3">
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
  return (
    <div className="card mt-3">
      <span>Calendar event list will be inserted here</span>
    </div>
  );
}
