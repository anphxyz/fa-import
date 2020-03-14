import React from 'react';
import TabPersonalPermissions from './TabPersonalPermissions.jsx';
import TabListFunction from './TabListFunction.jsx';
import TabPermissions from './TabPermissions.jsx';
import TabLogin from './TabLogin.jsx';

export default class PermissionCentre extends React.Component {

  constructor(props) { super(props); }

  render() {
    return (
      <div className="content-tab-menu">
        <div className="row">
          <div className="col-12">
            <ul className="nav nav-tabs">
              <li><a data-toggle="tab" href="#personal_permission" className="tab-active title-tab">Quyền cá nhân</a></li>
              <li><a data-toggle="tab" href="#list_function" className="title-tab">Danh sách chức năng</a></li>
              <li><a data-toggle="tab" href="#permission" className="title-tab">Phân quyền</a></li>
              <li><a data-toggle="tab" href="#content_login" className="title-tab">Đăng nhập</a></li>
            </ul>
            <div className="tab-content">
              <TabPersonalPermissions />
              <TabListFunction />
              <TabPermissions />
              <TabLogin />
            </div>
          </div>
        </div>

      </div>
    );
  }
}