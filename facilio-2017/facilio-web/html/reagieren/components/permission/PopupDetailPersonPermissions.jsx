import React from 'react';

export default class PopupDetailPersonPermissions extends React.Component{

  constructor(props) { super(props); }

  render(){
    return (
      <div className="popup-slider" id="popup_slide_detail_person_permission">
        <div className="popup-slider-content popup-slider-small">
          <div className="popup-slider-small-top">
            <div className="row">
              <div className="col-12">
                <h3>Quyền sử dụng chương trình (FAC)</h3>
                <a  className="close-popup-slider"><span className="faci-close float-right close-slide" /></a>
              </div>
            </div>
          </div>
          <div className="popup-slider-small-body">
            <div className="slide-detail-person-permission">
              <div className="detail-person-permission-content">
                <div className="row">
                  <div className="col-12">
                    <ul>
                      <li>
                        <label>Quyen truy cap cong viec theo loai may (FAC_GRP_MAC)</label>
                        <label className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-indicator" />
                        </label>
                      </li>
                      <li>
                        <label>Quyền thay đổi nhân viên bảo trì (PMA_EMP_UPD)</label>
                        <label className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-indicator" />
                        </label>
                      </li>
                      <li>
                        <label>Quyền truy cập TAB Báo cáo (TAB_REP_VIE)</label>
                        <label className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-indicator" />
                        </label>
                      </li>
                      <li>
                        <label>Chức năng sử dụng (xem) tin nhắn (PER_NOT_CRE)</label>
                        <label className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-indicator" />
                        </label>
                      </li>
                      <li>
                        <label>Chức năng chỉnh sửa tin nhắn (PER_NOT_MOD)</label>
                        <label className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-indicator" />
                        </label>
                      </li>
                      <li>
                        <label>Quyen truy cap cong viec theo loai may (FAC_GRP_MAC)</label>
                        <label className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-indicator" />
                        </label>
                      </li>
                      <li>
                        <label>Quyền thay đổi nhân viên bảo trì (PMA_EMP_UPD)</label>
                        <label className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-indicator" />
                        </label>
                      </li>
                      <li>
                        <label>Quyền truy cập TAB Báo cáo (TAB_REP_VIE)</label>
                        <label className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-indicator" />
                        </label>
                      </li>
                      <li>
                        <label>Chức năng sử dụng (xem) tin nhắn (PER_NOT_CRE)</label>
                        <label className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-indicator" />
                        </label>
                      </li>
                      <li>
                        <label>Chức năng chỉnh sửa tin nhắn (PER_NOT_MOD)</label>
                        <label className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-indicator" />
                        </label>
                      </li>
                      <li>
                        <label>Quyen truy cap cong viec theo loai may (FAC_GRP_MAC)</label>
                        <label className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-indicator" />
                        </label>
                      </li>
                      <li>
                        <label>Quyền thay đổi nhân viên bảo trì (PMA_EMP_UPD)</label>
                        <label className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-indicator" />
                        </label>
                      </li>
                      <li>
                        <label>Quyền truy cập TAB Báo cáo (TAB_REP_VIE)</label>
                        <label className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-indicator" />
                        </label>
                      </li>
                      <li>
                        <label>Chức năng sử dụng (xem) tin nhắn (PER_NOT_CRE)</label>
                        <label className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-indicator" />
                        </label>
                      </li>
                      <li>
                        <label>Chức năng chỉnh sửa tin nhắn (PER_NOT_MOD)</label>
                        <label className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-indicator" />
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="popup-slider-small-footer">
            <div className="row justify-content-end">
              <a className="btn btn-close close-popup-slider">ĐÓNG</a>
              <a className="btn btn-save">LƯU</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}