import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "../event-list-attendee/event-list-attendee.component";
class EventListItem extends Component {
  render() {
    const { event, selectEvent,deleteEvent } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size='tiny' circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header>{event.title}</Item.Header>
                <Item.Description>Hosted by {event.hostedBy}</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name='clock' /> {event.date} |
            <Icon name='marker' /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees &&
              event.attendees.map(attendee => (
                <EventListAttendee key={attendee.id} attendee={attendee} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{event.description}</span>
          <Button
            as='a'
            color='red'
            floated='right'
            content='Delete'
            onClick={() => deleteEvent(event.id)}
          />
          <Button
            as='a'
            color='teal'
            floated='right'
            content='View'
            onClick={() => selectEvent(event)}
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
