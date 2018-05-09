import React from 'react';

import CalendarContainer from 'components/containers/CalendarContainer';
import Calendar from 'components/templates/Calendar';

const ReactCalendar = () => {
  return(
    <CalendarContainer render={data => (<Calendar data={data} />)}/>
  );
}

export default ReactCalendar;