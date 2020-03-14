import React from 'react';
import MaintenanceRow from "./MaintenanceRow";
import { EW, M1, M2, M3, M6, Y1, Y2 } from "../constants/MaintenanceDays"
export default class BTRow extends MaintenanceRow {
  constructor(props) {
    super(props);
  }

  render() {
    const
      {
        ID, eW, m1, m2, m3, m6, y1, y2, otherPMDay, BN113,
        cancelEdit, rmvRow, cloneRow, goEditMode, saveEdit,
        changeField, changeMaintenanceDay
      } = this.props;

    // {/* row[7] e.W */ }
    // {/* row[8] 1M */ }
    // {/* row[9] 2M */ }
    // {/* row[10] 3M */ }
    // {/* row[11] 6M */ }
    // {/* row[12] 1Y */ }
    // {/* row[13] 2Y */ }
    // {/* row[14] khác */ }
    // {/* row[15] LIM */ }
    // {/* FUNC */ }
    // {/* save edit */}
    // {/* cancel edit */}
    // {/* delete row */}
    // {/* clone row */}
    // {/* go to edit mode */}
    return ([
      <td key={'EW' + ID} className="td9-child" >
        <label className="data-radio">
          <input form={'frm' + ID} onChange={changeMaintenanceDay} defaultChecked={eW > 0} type="radio" name={ID} value={EW} />
        </label>
      </td >,
      <td key={'M1' + ID} className="td9-child" >
        <label className="data-radio">
          <input form={'frm' + ID} onChange={changeMaintenanceDay} defaultChecked={m1 > 0} type="radio" name={ID} value={M1} />
        </label>
      </td >,
      <td key={'M2' + ID} className="td9-child" >
        <label className="data-radio">
          <input form={'frm' + ID} onChange={changeMaintenanceDay} defaultChecked={m2 > 0} type="radio" name={ID} value={M2} />
        </label>
      </td >,
      <td key={'M3' + ID} className="td9-child" >
        <label className="data-radio">
          <input form={'frm' + ID} onChange={changeMaintenanceDay} defaultChecked={m3 > 0} type="radio" name={ID} value={M3} />
        </label>
      </td >,
      <td key={'M6' + ID} className="td9-child" >
        <label className="data-radio">
          <input form={'frm' + ID} onChange={changeMaintenanceDay} defaultChecked={m6 > 0} type="radio" name={ID} value={M6} />
        </label>
      </td >,
      <td key={'Y1' + ID} className="td9-child" >
        <label className="data-radio">
          <input form={'frm' + ID} onChange={changeMaintenanceDay} defaultChecked={y1 > 0} type="radio" name={ID} value={Y1} />
        </label>
      </td >,
      <td key={'Y2' + ID} className="td9-child" >
        <label className="data-radio">
          <input form={'frm' + ID} onChange={changeMaintenanceDay} defaultChecked={y2 > 0} type="radio" name={ID} value={Y2} />
        </label>
      </td >,
      <td key={'OTH' + ID} className="td9-child" >
        <label className="data-radio ext-input">
          <input form={'frm' + ID} defaultChecked={otherPMDay > 0} type="radio" name={ID} />
          <input form={'frm' + ID} className="data-input" type="text" onChange={changeMaintenanceDay} defaultValue={otherPMDay} name="otherPMDay" />
        </label>
      </td >,
      <td key={'BN113' + ID} className="td10 data" >
        <input form={'frm' + ID} onChange={changeField} defaultValue={BN113 > 0 ? BN113 : ''} name="BN113" className="data-input" type="text" />
      </td >,
      <td key={'FUNC' + ID} className="td11 data" >
        <div className="data-func">
          <button form={'frm' + ID} type="submit" className="func-ok"><span className="faci-check"></span></button>
          <button onClick={() => cancelEdit(ID)} className="func-cancel"><span className="faci-close"></span></button>
          <button onClick={() => rmvRow(ID)} className="func-del"><span className="faci-delete"></span></button>
          <button onClick={() => cloneRow(ID)} className="func-clone"><span className="faci-File4"></span></button>
          <button onClick={() => goEditMode(ID)} className="func-edit"><span className="faci-edit"></span></button>
        </div>
        <form onSubmit={saveEdit} id={'frm' + ID}></form>
      </td >]);
  }

}
// BTRow.propTypes = {
//   row: PropTypes.array.isRequired,
//   ID: PropTypes.string.isRequired
// }
