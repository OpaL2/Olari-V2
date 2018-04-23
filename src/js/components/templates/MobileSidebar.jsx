import React from 'react';
import ReactDOM from 'react-dom';

import SearchForm from 'components/templates/SearchForm';

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
    return(
      <React.Fragment>
        {ReactDOM.createPortal(
        <div className="btn-group btn-group-lg" role="group">
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
      ,document.getElementById('react-navigation'))
      }

      <MobileMenu
        visible={this.state.visibleMenu}
        menus={this.props.data.menus}
        menuLocations={this.props.data.menuLocations}
        menuName="primary"
      />

      <SearchForm
        siteAddress={this.props.data.settings.siteAddress}
      />

      </React.Fragment>
    );
  }
}
export default MobileSidebar;

const NavToggler = (props) => {
  return(
      <button onClick={props.action} className={props.isActive ? "btn btn-secondary active" : "btn btn-secondary"}>{props.children}</button>
  ); 
}

const MobileMenu = (props) => {
  return props.visible ? <p>Hello</p> : null
}