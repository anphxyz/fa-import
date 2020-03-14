import React from 'react';

export default class PopupGroupPerson extends React.Component{

  constructor(props) { super(props); }

  render(){
    return (
      <div className="popup-slider" id="popup_slide_group_person">
        <div className="popup-slider-content popup-slider-small">
          <div className="popup-slider-small-top">
            <div className="row">
              <div className="col-12">
                <span className="faci-user-add float-left ic-add-user" />
                <h3>Kỹ thuật viên</h3>
                <a className="close-popup-slider"><span className="faci-close float-right close-slide" /></a>
              </div>
            </div>
          </div>
          <div className="popup-slider-small-search">
            <div className="row">
              <div className="col-12">
                <form className="form-inline">
                  <div className="form-group mx-sm-3">
                    <input type="text" className="form-control input-search" />
                  </div>
                  <a><span className="faci-search"><span className="path2" /></span></a>
                </form>
              </div>
            </div>
          </div>
          <div className="popup-slider-small-body">
            <div className="slide-group-person">
              <div className="clearfix" />
              <div className="slide-group-person-content">
                <div className="row">
                  <div className="col-12">
                    <ul>
                      <li>
                        <span>Bùi Văn Lập</span>
                        <div className="switch_box float-right">
                          <input type="checkbox" className="switch_cb" />
                        </div>
                      </li>
                      <li>
                        <span>Bùi Văn Lập</span>
                        <div className="switch_box float-right">
                          <input type="checkbox" className="switch_cb" defaultChecked />
                        </div>
                      </li>
                      <li>
                        <span>Bùi Văn Lập</span>
                        <div className="switch_box float-right">
                          <input type="checkbox" className="switch_cb" />
                        </div>
                      </li>
                      <li>
                        <span>Bùi Văn Lập</span>
                        <div className="switch_box float-right">
                          <input type="checkbox" className="switch_cb" />
                        </div>
                      </li>
                      <li>
                        <span>Bùi Văn Lập</span>
                        <div className="switch_box float-right">
                          <input type="checkbox" className="switch_cb" />
                        </div>
                      </li>
                      <li>
                        <span>Bùi Văn Lập</span>
                        <div className="switch_box float-right">
                          <input type="checkbox" className="switch_cb" />
                        </div>
                      </li>
                      <li>
                        <span>Bùi Văn Lập</span>
                        <div className="switch_box float-right">
                          <input type="checkbox" className="switch_cb" />
                        </div>
                      </li>
                      <li>
                        <span>Bùi Văn Lập</span>
                        <div className="switch_box float-right">
                          <input type="checkbox" className="switch_cb" />
                        </div>
                      </li>
                      <li>
                        <span>Bùi Văn Lập</span>
                        <div className="switch_box float-right">
                          <input type="checkbox" className="switch_cb" defaultChecked />
                        </div>
                      </li>
                      <li>
                        <span>Bùi Văn Lập</span>
                        <div className="switch_box float-right">
                          <input type="checkbox" className="switch_cb" />
                        </div>
                      </li>
                      <li>
                        <span>Bùi Văn Lập</span>
                        <div className="switch_box float-right">
                          <input type="checkbox" className="switch_cb" />
                        </div>
                      </li>
                      <li>
                        <span>Bùi Văn Lập</span>
                        <div className="switch_box float-right">
                          <input type="checkbox" className="switch_cb" />
                        </div>
                      </li>
                      <li>
                        <span>Bùi Văn Lập</span>
                        <div className="switch_box float-right">
                          <input type="checkbox" className="switch_cb" />
                        </div>
                      </li>
                      <li>
                        <span>Bùi Văn Lập</span>
                        <div className="switch_box float-right">
                          <input type="checkbox" className="switch_cb" />
                        </div>
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