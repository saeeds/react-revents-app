import React, { Component, Fragment } from "react";
import EventListItem from "./event-list-item/event-list-item.component";
class EventList extends Component {
  render() {
    const { events, selectEvent, deleteEvent } = this.props;

    return (
      <Fragment>
        {events.map(event => (
          <EventListItem
            key={event.id}
            event={event}
            selectEvent={selectEvent}
            deleteEvent={deleteEvent}
          />
        ))}
      </Fragment>
    );
  }
}

export default EventList;
