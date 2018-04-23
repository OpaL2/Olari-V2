import React from 'react';
import ReactDOM from 'react-dom';

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
        <div className="mobile-toolbar">
          <NavToggler action={this.toggleHandout}>
            <i className="fas fa-info" />
          </NavToggler>
          <NavToggler action={this.toggleCalendar}>
            <i className="far fa-calendar-alt" />
          </NavToggler>
          <NavToggler action={this.toggleContact}>
            <i className="fas fa-address-book" />
          </NavToggler>
          <NavToggler action={this.toggleMenu}>
            <i className="fas fa-bars" />
          </NavToggler>
        </div>
      ,document.getElementById('react-navigation'))}



      </React.Fragment>
    );
  }
}
export default MobileSidebar;

const NavToggler = (props) => {
  return(
    <div className="mobile-toolbar-item">
      <button onClick={props.action}>{props.children}</button>
    </div>
  ); 
}