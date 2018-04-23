import React from 'react';

import Media from 'react-media';

class ReactSidebar extends React.Component {

render() {
  return(
    <Media query="(min-width: 992px)">
      {largeScreen => largeScreen
        ? <p>We Are on Large Screen </p>
        : <p>We are on small screen </p>
      }
    </Media>
  );
}

}

export default ReactSidebar;