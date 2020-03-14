import React from 'react';
import PopupListPersonPermissions from "./PopupListPersonPermissions.jsx";
import PopupDetailPersonPermissions from "./PopupDetailPersonPermissions.jsx";
export default class TabPersonalPermissions extends React.Component {

  constructor(props) { super(props); }

  render() {
    return (
      <div id="personal_permission" className="tab-pane fade in active personal-permission">
        <div className="personal-permission-top">
          <div className="row">
            <div className="col-8">
              <ul className="list-char-sort">
                {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(ch => <li key={ch}><a>{ch}</a></li>)}
                <li><a>Tất cả</a></li>
              </ul>
            </div>
            <div className="col-4">
              <div className="row justify-content-end">
                <input type="text" className="form-control search-list-name" />
                <span className="faci-search ic-search-list-name">
                  <span className="path2" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="personal-permission-content">
          <div className="row">
            <div className="col-12">
              <ul className="list-name">
                <li className="item-list-name">Văn Tân</li>
                <li className="item-list-name">Trần Minh Tuệ</li>
                <li className="item-list-name">Trần Minh Tuệ</li>
                <li className="item-list-name">Văn Tân</li>
                <li className="item-list-name">Trần Minh Tuệ</li>
                <li className="item-list-name">Trần Minh Tuệ</li>
                <li className="item-list-name">Văn Tân</li>
                <li className="item-list-name">Trần Minh Tuệ</li>
                <li className="item-list-name">Trần Minh Tuệ</li>
              </ul>
            </div>
          </div>
        </div>
        <PopupListPersonPermissions />
        <PopupDetailPersonPermissions />
      </div>
    );
  }
}