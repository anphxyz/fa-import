import React from 'react';
import PopupListFunction from './PopupListFunction.jsx';
import DialogUpdatePermissions from './DialogUpdatePermissions.jsx';
export default class TabListFunction extends React.Component {

  constructor(props) { super(props); }

  render() {
    return (
      <div id="list_function" className="tab-pane fade">
        <div className="list-function">
          <div className="row">
            <div className="col-12">
              <ul>
                <li>
                  <span className="title-lf">Nhóm quyền sử dụng giao diện nhập liệu</span>
                  <span className="item-lf">
                    <button>
                      <i className="faci-add" />
                      <span>Chức năng</span>
                    </button>
                    <a className="faci-list ic-list" />
                  </span>
                </li>
                <li>
                  <span className="title-lf">Nhóm quyền sử dụng giao diện tim kiếm</span>
                  <span className="item-lf">
                    <button>
                      <i className="faci-add" />
                      <span>Chức năng</span>
                    </button>
                    <a className="faci-list ic-list" />
                  </span>
                </li>
                <li>
                  <span className="title-lf">Quyền sử dụng giao diện TAB Bảo trì bôi trơn</span>
                  <span className="item-lf">
                    <button>
                      <i className="faci-add" />
                      <span>Chức năng</span>
                    </button>
                    <a className="faci-list ic-list" />
                  </span>
                </li>
                <li>
                  <span className="title-lf">Quyền sử dụng giao diện cung ứng vật tư</span>
                  <span className="item-lf">
                    <button>
                      <i className="faci-add" />
                      <span>Chức năng</span>
                    </button>
                    <a className="faci-list ic-list" />
                  </span>
                </li>
                <li>
                  <span className="title-lf">Quyền sử dụng Dashboard</span>
                  <span className="item-lf">
                    <button>
                      <i className="faci-add" />
                      <span>Chức năng</span>
                    </button>
                    <a className="faci-list ic-list" />
                  </span>
                </li>
                <li>
                  <span className="title-lf">Quyền sử dụng TAB admin</span>
                  <span className="item-lf">
                    <button>
                      <i className="faci-add" />
                      <span>Chức năng</span>
                    </button>
                    <a className="faci-list ic-list" />
                  </span>
                </li>
                <li>
                  <span className="title-lf">Quyền sử dụng chương trình</span>
                  <span className="item-lf">
                    <button>
                      <i className="faci-add" />
                      <span>Chức năng</span>
                    </button>
                    <a className="faci-list ic-list" />
                  </span>
                </li>
                <li>
                  <span className="title-lf">Quyền sử dụng giao diện CM</span>
                  <span className="item-lf">
                    <button>
                      <i className="faci-add" />
                      <span>Chức năng</span>
                    </button>
                    <a className="faci-list ic-list" />
                  </span>
                </li>
                <li>
                  <span className="title-lf">Quyền sử dụng giao diện PM</span>
                  <span className="item-lf">
                    <button>
                      <i className="faci-add" />
                      <span>Chức năng</span>
                    </button>
                    <a className="faci-list ic-list" />
                  </span>
                </li>
                <li>
                  <span className="title-lf">Quyền sử dụng lịch làm việc</span>
                  <span className="item-lf">
                    <button>
                      <i className="faci-add" />
                      <span>Chức năng</span>
                    </button>
                    <a className="faci-list ic-list" />
                  </span>
                </li>
                <li>
                  <span className="title-lf">Quyền xử lý tài liệu / hình ảnh</span>
                  <span className="item-lf">
                    <button>
                      <i className="faci-add" />
                      <span>Chức năng</span>
                    </button>
                    <a className="faci-list ic-list" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <DialogUpdatePermissions />
        <PopupListFunction />
      </div>
    );
  }
}