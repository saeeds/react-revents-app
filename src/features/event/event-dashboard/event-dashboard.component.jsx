import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../event-list/event-list.component";
import EventForm from "../event-form/event-form.component";
import eventsFromDashboard from "./events-from-dashboard";

class EventDashboard extends Component {
  state = {
    events: eventsFromDashboard,
    isOpen: false
  };

  handleIsOpenToggle = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };
  render() {
    const { events, isOpen } = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            positive
            content='Create Event'
            onClick={this.handleIsOpenToggle}
          />
          {isOpen && <EventForm cancelFormOpen={this.handleIsOpenToggle} />}
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
