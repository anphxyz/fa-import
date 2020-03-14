import React from 'react';
import OriginalMenu from './OriginalMenu.jsx';
import { Link } from "react-router-dom";

export default class Toolbar extends React.Component {
  render() {
    return (
      <div className="content-top">
        <div className="row">
          <div className="col-12">
            <div className="form-inline">
              <Link to="/reagieren/permission" className="btn btn-permission" role="button" id="btn-permission">Phân quyền</Link>
              <div className="dropdown">
                <button className="btn btn-data-root dropdown-toggle active" type="button" id="btn-data-root">
                  Dữ liệu gốc
                </button>
                <a className="name-parent-menu">Bảo trì</a><span style={{ fontSize: 12 }}>/</span><a className="name-child-menu">Vị trí thiết bị</a>
                <OriginalMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}