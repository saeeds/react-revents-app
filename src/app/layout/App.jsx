import React, { Component, Fragment } from "react";
import EventDashboard from "../../features/event/event-dashboard/event-dashboard.component";
import NavBar from "../../features/nav/nav-bar/nav-bar.component";
import { Container } from "semantic-ui-react";
class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </Fragment>
    );
  }
}

export default App;
