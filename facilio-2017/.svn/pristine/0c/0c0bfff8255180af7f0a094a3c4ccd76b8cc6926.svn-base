import React from 'react';
import { EW, M1, M2, M3, M6, Y1, Y2 } from "../constants/MaintenanceDays";
export default class MaintenanceRow extends React.Component {
  constructor(props) { super(props); }

  getInitStatePM() {
    const { idx, rowKey, ID, FC550, FB100, PB150, SV251, BV151, BV154, BV153, VV501, BV101, BN157, BN112, BN113, stateRow, eW, m1, m2, m3, m6, y1, y2, otherPMDay, dispSv251 } = this.props;
    return { idx, rowKey, ID, FC550, FB100, PB150, SV251, BV151, BV154, BV153, VV501, BV101, BN157, BN112, BN113, stateRow, eW, m1, m2, m3, m6, y1, y2, otherPMDay, dispSv251 }
  }

  getInitStateBT() {
    const { idx, rowKey, ID, FC550, FB100, PB150, SV251, BV151, BV154, BV153, VV501, BV101, BN157, BN112, BN113, stateRow, eW, m1, m2, m3, m6, y1, y2, otherPMDay, dispSv251 } = this.props;
    return { idx, rowKey, ID, FC550, FB100, PB150, SV251, BV151, BV154, BV153, VV501, BV101, BN157, BN112, BN113, stateRow, eW, m1, m2, m3, m6, y1, y2, otherPMDay, dispSv251 }
  }

  cancelEdit() {
    const { cancelEdit } = this.props;
    document.getElementById('frm' + this.state.ID).reset();
    cancelEdit(this.state.ID);
  }

  saveEdit(e) {
    e.preventDefault();
    const { saveEdit } = this.props;
    saveEdit(this.state.ID, this.state);
  }

  changeField(e) {
    this.setState({ [e.target.name]: +e.target.value || e.target.value })
    if (e.target.name === 'BN113')
      this.setState({ BV001: +e.target.value > 0 ? 'MI' : [0, 7].indexOf(this.state.BN102) > -1 ? 'WO' : 'TAG' })
  }

  changeMaintenanceDay(e) {
    const bn102 = +e.target.value;
    this.setState({
      BN102: bn102,
      eW: 0, m1: 0, m2: 0, m3: 0, m6: 0, y1: 0, y2: 0, otherPMDay: 0,
      BV001: +this.state.BN113 > 0 ? 'MI' : [0, 7].indexOf(bn102) > -1 ? 'WO' : 'TAG'
    })
    const stateDays = findStateNeedChange(bn102);
    this.setState({ [stateDays]: bn102 });
  }
}

const findStateNeedChange = bn102 => {
  switch (bn102) {
    case 0:
    case EW: return 'eW';
    case M1: return 'm1';
    case M2: return 'm2';
    case M3: return 'm3';
    case M6: return 'm6';
    case Y1: return 'y1';
    case Y2: return 'y2';
    default: return 'otherPMDay';
  }
}