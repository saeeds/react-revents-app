import React, { Component, Fragment } from "react";
import EventListItem from "./event-list-item/event-list-item.component";
class EventList extends Component {
  render() {
    return (
      <Fragment>
        {
          this.props.events.map(event => (
            <EventListItem key={event.id} event={event} />
          ))
        }
      </Fragment>
    );
  }
}

export default EventList;
