import React from 'react';

import Media from 'react-media';

import MobileSidebar from 'components/templates/MobileSidebar';
import TabletSidebar from 'components/templates/TabletSidebar';
import DesktopSidebar from 'components/templates/DesktopSidebar';


const ReactSidebar = () => {
  return(
    <Media query="(min-width: 576px)">
      {largeScreen => largeScreen
        ? 
          <Media query="(min-width: 768px)">
            {desktopScreen => desktopScreen
              ?
                <DesktopSidebar />
              :
                <TabletSidebar />
            }
          </Media>
        : 
        <MobileSidebar />
      }
    </Media>
  );
}

export default ReactSidebar;