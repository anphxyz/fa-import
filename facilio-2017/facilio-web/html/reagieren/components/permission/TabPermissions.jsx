import React from 'react';
import PopupGroupPerson from './PopupGroupPerson.jsx';
import PopupPermissions from './PopupPermissions.jsx';
export default class TabPermissions extends React.Component{

  constructor(props) { super(props); }

  render(){
    return (
      <div id="permission" className="tab-pane fade">
        <div className="content-permission">
          <div className="row">
            <div className="col-12">
              <button type="button" className="btn-group-permission"><span className="faci-add ic-add" />Nhóm quyền</button>
              <div id="accordion" role="tablist">
                <div className="card">
                  <div className="card-header" role="tab" id="headingOne">
                    <h5 className="mb-0">
                      <a data-toggle="collapse" href="#collapseOne" className="title-collapse" aria-expanded="false" aria-controls="collapseOne">
                        <span className="faci-arrow-lineD ic-arrow-down" />
                        Kỹ thuật viên
                      </a>
                      <span className="faci-delete float-right ic-delete-permission" />
                      <span className="faci-edit float-right ic-edit-permission" />
                      <a  className="btn-add-user"><span className="faci-user-add float-right ic-add-user" /></a>
                    </h5>
                  </div>
                  <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                      <ul>
                        <li className="item-group-permission">Nhóm quyền sử dụng giao diện nhập liệu<span className="faci-arrow-right float-right" /></li>
                        <li className="item-group-permission">Nhóm quyền sử dụng giao diện tìm kiếm<span className="faci-arrow-right float-right" /></li>
                        <li className="item-group-permission">Quyen su dung giao dien cung ung vat tu<span className="faci-arrow-right float-right" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" role="tab" id="headingTwo">
                    <h5 className="mb-0">
                      <a className="collapsed title-collapse" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <span className="faci-arrow-lineD ic-arrow-down" />
                        Nhân viên X.SC
                      </a>
                      <span className="faci-delete float-right ic-delete-permission" />
                      <span className="faci-edit float-right ic-edit-permission" />
                      <a  className="btn-add-user"><span className="faci-user-add float-right ic-add-user" /></a>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                      <ul>
                        <li className="item-group-permission">Nhóm quyền sử dụng giao diện nhập liệu<span className="faci-arrow-right float-right" /></li>
                        <li className="item-group-permission">Nhóm quyền sử dụng giao diện tìm kiếm<span className="faci-arrow-right float-right" /></li>
                        <li className="item-group-permission">Quyen su dung giao dien cung ung vat tu<span className="faci-arrow-right float-right" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" role="tab" id="headingThree">
                    <h5 className="mb-0">
                      <a className="collapsed title-collapse" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <span className="faci-arrow-lineD ic-arrow-down" />
                        ADMIN GROUP OF XNBS LORME DUMMY TEXT
                      </a>
                      <span className="faci-delete float-right ic-delete-permission" />
                      <span className="faci-edit float-right ic-edit-permission" />
                      <a  className="btn-add-user"><span className="faci-user-add float-right ic-add-user" /></a>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                      <ul>
                        <li className="item-group-permission">Nhóm quyền sử dụng giao diện nhập liệu<span className="faci-arrow-right float-right" /></li>
                        <li className="item-group-permission">Nhóm quyền sử dụng giao diện tìm kiếm<span className="faci-arrow-right float-right" /></li>
                        <li className="item-group-permission">Quyen su dung giao dien cung ung vat tu<span className="faci-arrow-right float-right" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PopupPermissions />
        <PopupGroupPerson />
      </div>
    );
  }
}