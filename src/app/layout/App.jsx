import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";

import EventDashboard from "../../features/events/event-dashboard/event-dashboard.component";
import NavBar from "../../features/nav/nav-bar/nav-bar.component";
import HomePage from "../../features/home/home-page.component";
import EventDetailedPage from "../../features/events/event-detailed/event-detailed-page.component";
import PeopleDashboard from "../../features/user/people-dashboard/people-dashboard.component";
import SettingsDashboard from "../../features/user/settings/settings-dashboard/settings-dashboard.component";
import UserDetailedPage from "../../features/user/user-detailed/user-detailed-page.component";
import EventForm from "../../features/events/event-form/event-form.component";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route
            path='/(.+)'
            render={() => (
              <Fragment>
                <NavBar />
                <Container className='main'>
                  <Route path='/events' component={EventDashboard} />
                  <Route path='/events/:id' component={EventDetailedPage} />
                  <Route path='/people' component={PeopleDashboard} />
                  <Route path='/profile/:id' component={UserDetailedPage} />
                  <Route path='/settings' component={SettingsDashboard} />
                  <Route path='/createEvent' component={EventForm} />
                </Container>
              </Fragment>
            )}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
