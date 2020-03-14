import React from 'react';

export default class DialogUpdatePermissions extends React.Component {

  constructor(props) { super(props); }

  render() {
    return (
      <div className="qb-dialog" id="update_permission">
        <div className="qb-dialog-overlay">
          <div className="container-fluid qb-dialog-body">
            {/* Header Dialog */}
            <div className="qb-dialog-header">
              <div className="row">
                <div className="col-12">
                  <span className="faci-update ic-title-dialog" />
                  <h3 className="title-dialog">CẬP NHẬT PHÂN QUYỀN</h3>
                  <a className="faci-close ic-close-dialog close-dialog" />
                </div>
              </div>
            </div>
            {/* Content Dialog */}
            <div className="qb-dialog-content">
              <div className="update-permision">
                <p className="title-body">Quyền sử dụng giao diện TAB Bảo trì bôi trơn</p>
                <div className="form-group">
                  <label>Từ khóa</label>
                  <input type="text" className="form-control input-keyword" placeholder="PMB_NOT_VIE" />
                </div>
                <div className="form-group">
                  <label>Mô tả</label>
                  <textarea className="form-control txt-describe" rows="3" placeholder="Chức năng truy cập báo cáo kết quả thực hiện PM" defaultValue="" />
                </div>
              </div>
            </div>
            {/* Footer Dialog */}
            <div className="qb-dialog-footer">
              <div className="row justify-content-end">
                <div className="col-12 text-right">
                  <a className="btn-close close-dialog">{lang._btn_close}</a>
                  <a className="btn-save">{lang._btn_save}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}