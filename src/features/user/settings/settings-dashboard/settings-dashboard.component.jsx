import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import SettingsNav from "../settings-nav/settings-nav.component";
import BasicPage from "../basic-page/basic-page.component";
import AccountPage from "../account-page/account-page.component";
import PhotosPage from "../photos-page/photos-page.component";
import AboutPage from "../about-page/about-page.component";

const SettingsDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Redirect exact from='/settings' to='/settings/basic' />
        <Route path='/settings/basic' component={BasicPage} />
        <Route path='/settings/about' component={AboutPage} />
        <Route path='/settings/photos' component={PhotosPage} />
        <Route path='/settings/account' component={AccountPage} />
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingsNav />
      </Grid.Column>
    </Grid>
  );
};

export default SettingsDashboard;
