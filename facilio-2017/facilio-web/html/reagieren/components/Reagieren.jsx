import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Toolbar from './Toolbar.jsx';
import PermissionCentre from './permission/PermissionCentre.jsx';
import B050 from './_b/B050.jsx';

export default class Reagieren extends React.Component {
  constructor(props) { super(props); }

  render() {
    return (
      <div className="content-body">
        <div className="content-page-system-management">
          <div className="container-fluid">
            <BrowserRouter>
              <div className="content">
                <Toolbar />
                <Route path="/reagieren/permission" render={props => <PermissionCentre {...props} />} />
                <Route path="/reagieren/b050" render={props => <B050 {...props} />} />
              </div>
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}