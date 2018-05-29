import React from 'react';
import ReactDOM from 'react-dom';

import {SidebarElements, toggledSidebar} from 'components/templates/MobileSidebar';
import container from 'components/containers/Container';


const TabletSidebar = (props) => {
    return(
      <React.Fragment>
        {
          ReactDOM.createPortal(
        <div className="btn-group-vertical btn-group-lg" role="group">
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
        , document.getElementById('react-mobile-root'))
        }
        {
          ReactDOM.createPortal(
            <SidebarElements
              visibility={props.visibility}
              data={props.data}
            />
          , document.getElementById('react-tablet-root'))
        }

      </React.Fragment>
    );
  }


export default container(toggledSidebar(TabletSidebar));

const NavToggler = (props) => {
  return(
      <button onClick={props.action} className={props.isActive ? "btn btn-outline-secondary active" : "btn btn-outline-secondary"}>{props.children}</button>
  ); 
}
