import React from 'react';

import moment from 'moment';

class Calendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return(
      <div> {moment().calendar()} </div>
    );
  }
}

export default Calendar