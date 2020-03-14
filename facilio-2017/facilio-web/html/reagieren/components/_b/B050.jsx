import React from 'react';

export default class B050 extends React.Component {
  constructor(props) { super(props); }

  render() {
    return (
      <div className="content-data-root">
        <div className="data-root-breadcrumb">
          <div className="row">
            <div className="col-12">
              <nav className="breadcrumb">
                <a className="breadcrumb-item link-root">
                  <span className="faci-factory ic-link-root" />NHA MAY VICEM BIM SON (10006)</a>
                <a className="breadcrumb-item active link-child">DÂY CHUYỀN 3</a>
                <a className="breadcrumb-item active link-child">VẬN CHUYỂN BỘT SỐNG VÀO SILO BỘT SỐNG</a>
              </nav>
            </div>
          </div>
        </div>
        <div className="data-root-body">
          <div className="top-body">
            <div className="row">
              <div className="col-12">
                <div className="row justify-content-end">
                  <a className="btn-device-location">
                    <span className="faci-add ic-add" />Vị trí thiết bị</a>
                  <div className="dropdown">
                    <button className="qb-dropdown dropdown-toggle" type="button" data-toggle="dropdown">
                      Bảo trì định kì
                </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item qb-dropdown-item">Action</a>
                      <a className="dropdown-item qb-dropdown-item">Another action</a>
                      <a className="dropdown-item qb-dropdown-item">Something else here</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-body">
            <div className="row">
              <div className="col-md-3 p-0">
                <div className="left-content">
                  <div className="tree" />
                </div>
              </div>
              <div className="col-md-9" style={{ paddingLeft: 0 }}>
                <div className="right-content">
                  <table className="table table-responsive qb-table">
                    <thead>
                      <tr className="header-table">
                        <th>MÃ THIẾT BỊ</th>
                        <th>TÊN THIẾT BỊ</th>
                        <th>TRẠNG THÁI</th>
                        <th>MÃ TÀI SẢN</th>
                        <th>HẠN MỨC</th>
                        <th>CHỨC NĂNG</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>14531.BC01</td>
                        <td className="text-left name-device">
                          <span className="faci-finished ic-span"><span className="path1" /><span className="path2" /></span>
                          Băng tải 531.BC01
                        </td>
                        <td>
                          <div className="switch_box" data-toggle="tooltip" data-placement="top" title="Đang dừng">
                            <input type="checkbox" className="switch_cb" />
                          </div>
                        </td>
                        <td>531BC037</td>
                        <td />
                        <td>
                          <a className="faci-user-add ic-span" />
                          <a className="faci-File3 ic-span" />
                          <a className="faci-File-plus ic-span" />
                          <a className="faci-edit ic-span" />
                          <a className="faci-delete ic-span" />
                        </td>
                      </tr>
                      <tr>
                        <td>14531.BC01</td>
                        <td className="text-left name-device">
                          <span className="faci-finished ic-span"><span className="path1" /><span className="path2" /></span>
                          Băng tải 531.BC01
                        </td>
                        <td>
                          <div className="switch_box" data-toggle="tooltip" data-placement="top" title="Đang chạy">
                            <input type="checkbox" className="switch_cb" defaultChecked />
                          </div>
                        </td>
                        <td>531BC037</td>
                        <td />
                        <td>
                          <a className="faci-user-add ic-span" />
                          <a className="faci-File3 ic-span" />
                          <a className="faci-File-plus ic-span" />
                          <a className="faci-edit ic-span" />
                          <a className="faci-delete ic-span" />
                        </td>
                      </tr>
                      <tr>
                        <td>14531.BC01</td>
                        <td className="text-left name-device">
                          <span className="faci-finished ic-span"><span className="path1" /><span className="path2" /></span>
                          Băng tải 531.BC01
                        </td>
                        <td>
                          <div className="switch_box" data-toggle="tooltip" data-placement="top" title="Đang dừng">
                            <input type="checkbox" className="switch_cb" />
                          </div>
                        </td>
                        <td>531BC037</td>
                        <td />
                        <td>
                          <a className="faci-user-add ic-span" />
                          <a className="faci-File3 ic-span" />
                          <a className="faci-File-plus ic-span" />
                          <a className="faci-edit ic-span" />
                          <a className="faci-delete ic-span" />
                        </td>
                      </tr>
                      <tr>
                        <td>14531.BC01</td>
                        <td className="text-left name-device">
                          <span className="faci-finished ic-span"><span className="path1" /><span className="path2" /></span>
                          Băng tải 531.BC01
                        </td>
                        <td>
                          <div className="switch_box" data-toggle="tooltip" data-placement="top" title="Đang dừng">
                            <input type="checkbox" className="switch_cb" />
                          </div>
                        </td>
                        <td>531BC037</td>
                        <td />
                        <td>
                          <a className="faci-user-add ic-span" />
                          <a className="faci-File3 ic-span" />
                          <a className="faci-File-plus ic-span" />
                          <a className="faci-edit ic-span" />
                          <a className="faci-delete ic-span" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}