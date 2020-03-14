import React from 'react';
import PropTypes from 'prop-types';
import MaintenanceRow from "./MaintenanceRow"
import MaintenanceTime from "../components/MaintenanceTime.jsx"
export default class PMRow extends MaintenanceRow {
  constructor(props) {
    super(props);

    this.getInitStatePM = this.getInitStatePM.bind(this);
    this.state = this.getInitStatePM();

    this.changeField = this.changeField.bind(this);
    this.changeMaintenanceDay = this.changeMaintenanceDay.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
  }

  render() {
    const {
      idx, ID, FB100, PB150, BN106, SV251, BV151, BV154, BN158, VV501, BV101, BN113, stateRow, eW, m1, m2, m3, m6, y1, y2, otherPMDay, dispSv251,
      rmvRow, cloneRow, goEditMode
    } = this.props;

    const propTime = {
      ID, eW, m1, m2, m3, m6, y1, y2, otherPMDay, BN113,
      saveEdit: this.saveEdit,
      cancelEdit: this.cancelEdit,
      rmvRow, cloneRow, goEditMode,
      changeField: this.changeField,
      changeMaintenanceDay: this.changeMaintenanceDay
    };
    return (
      <tr className={stateRow}>
        {/* idx */}
        <td className="td1 data">
          {idx + 1}
          <input type="hidden" name="fb100" defaultValue={FB100} name="FB100" />
          <input type="hidden" name="pb150" defaultValue={PB150} name="PB150" />
        </td>
        {/* row[0] Bộ phận */}
        <td title={SV251} className="td2 data">
          <input form={'frm' + ID} onChange={this.changeField} defaultValue={SV251} name="SV251" className={"data-input data-warn " + dispSv251} type="text" required />
        </td>
        {/* row[1] Công việc bảo trì */}
        <td title={BV151} className="td3 data">
          <input form={'frm' + ID} onChange={this.changeField} defaultValue={BV151} name="BV151" className="data-input data-warn" type="text" required />
        </td>
        {/* row[2] Yêu cầu kỹ thuật (*) */}
        <td title={BV154} className="td4 data">
          <input form={'frm' + ID} onChange={this.changeField} defaultValue={BV154} name="BV154" className="data-input data-warn" type="text" required />
        </td>
        {/* row[3] Công việc trọng yếu (**) */}
        <td className="td5 text-center"><div className="switch_box">
          <input form={'frm' + ID} onChange={this.changeField} defaultChecked={BN106} name="BN106" type="checkbox" className="switch_cb" /></div>
        </td>
        {/* row[4] Mã vật tư */}
        <td title={VV501} className="td6 data">
          <input form={'frm' + ID} onChange={this.changeField} defaultValue={VV501} name="VV501" className="data-input" type="text" />
        </td>
        {/* row[5] SL */}
        <td title={BV101} className="td7 data">
          <input form={'frm' + ID} onChange={this.changeField} defaultValue={BV101} name="BV101" className="data-input" type="text" />
        </td>
        {/* row[6] Trạng thái */}
        <td className="td8 text-center"><div className="switch_box">
          <input form={'frm' + ID} onChange={this.changeField} defaultChecked={BN158} name="BN158" type="checkbox" className="switch_cb" /></div>
        </td>
        <MaintenanceTime {...propTime} />

      </tr >
    );
  }
}

PMRow.propTypes = {
  idx: PropTypes.number,
  //rowKey: PropTypes.string,
  //ID: PropTypes.string,
  //FC550: PropTypes.string,
  FB100: PropTypes.number,
  PB150: PropTypes.number,
  //SV251: PropTypes.string,
  //BV151: PropTypes.string,
  //BV154: PropTypes.string,
  //BV153: PropTypes.string,
  //VV501: PropTypes.string,
  BV101: PropTypes.number,//SL
  BN157: PropTypes.number,
  BN112: PropTypes.number,
  BN113: PropTypes.number,
  //stateRow: PropTypes.string,
  eW: PropTypes.number,
  m1: PropTypes.number,
  m2: PropTypes.number,
  m3: PropTypes.number,
  m6: PropTypes.number,
  y1: PropTypes.number,
  y2: PropTypes.number,
  otherPMDay: PropTypes.number,
  //dispSv251: PropTypes.string
}
