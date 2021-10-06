import React from "react";
import {
  Router,
  Switch,
  Route
} from "react-router-dom";

import LoadBoard from '../containers/LoadBoard';
import LoadDetails from '../containers/LoadDetails';
import CommonForm from '../containers/CommonForm';
import AssetManager from '../containers/AssetManager';
import CommonBoard from '../containers/CommonBoard';

export default function RouterComponent(props) {
  const { history } = props
  return (
    <Router history={history}>
        <Switch>
          <Route exact path="/vgdt-dispatch/name/:dispatch/assets/:table/:id" component={AssetManager} />
          <Route exact path="/vgdt-dispatch/name/:dispatch/:table/:id" component={CommonForm} />
          <Route exact path="/vgdt-dispatch/name/:dispatch" component={LoadBoard}/>
          <Route exact path="/vgdt-dispatch/name/:dispatch/:table" component={CommonBoard} />
        </Switch>
    </Router>
  );
}
