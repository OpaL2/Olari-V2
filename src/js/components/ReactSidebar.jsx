import React from 'react';

import Media from 'react-media';

import SidebarContainer from 'components/containers/SidebarContainer';
import MobileSidebar from 'components/templates/MobileSidebar';

const ReactSidebar = () => {
  return(
    <Media query="(min-width: 576px)">
      {largeScreen => largeScreen
        ? 
          <Media query="(min-width: 1200px)">
            {desktopScreen => desktopScreen
              ?
                <SidebarContainer
                  render= { container => (
                    <DesktopSidebar data={container} />
                  )}
                />
              :
                <SidebarContainer
                  render = { container => (
                    <TabletSidebar data = {container} />
                  )}
                />
            }
          </Media>
        : 
          <SidebarContainer
            render={ container => (
              <MobileSidebar data={container} />
            )} 
          />
      }
    </Media>
  );
}

export default ReactSidebar;

const DesktopSidebar = (props) => {
  return(
    <p>Desktop sidebar</p>
  );
}

const TabletSidebar = (props) => {
  return (
    <p>Tablet Sidebar</p>
  );
}