import { EW, M1, M2, M3, M6, Y1, Y2 } from "../constants/MaintenanceDays"


export const mapRowFromDB = (b100, i = 0) => {
  const BN102 = +b100.BN102 || 0;

  return {
    ...b100,
    rowKey: b100.FC550 + getRandomStr(),
    ID: _generateRowId(b100.FC550, i),
    eW: BN102 === 0 || BN102 === EW ? EW : 0,
    m1: BN102 === M1 ? M1 : 0,
    m2: BN102 === M2 ? M2 : 0,
    m3: BN102 === M3 ? M3 : 0,
    m6: BN102 === M6 ? M6 : 0,
    y1: BN102 === Y1 ? Y1 : 0,
    y2: BN102 === Y2 ? Y2 : 0,
    otherPMDay: [EW, M1, M2, M3, M6, Y1, Y2].indexOf(BN102) === -1 ? BN102 : 0,
    stateRow: 'row-view',
    dispSv251: '' //_calcstateClsSV251(row[0]), hide  từ db
  }

}

export const mapRowFromExcel = (FC550, rows = '', i = 0) => {
  const row = rows ? rows.split('#qb#') : [],
    eW = !row.length || (row[7] && row[7] === 'x') ? EW : 0,
    m1 = row[8] && row[8] === 'x' ? M1 : 0,
    m2 = row[9] && row[9] === 'x' ? M2 : 0,
    m3 = row[10] && row[10] === 'x' ? M3 : 0,
    m6 = row[11] && row[11] === 'x' ? M6 : 0,
    y1 = row[12] && row[12] === 'x' ? Y1 : 0,
    y2 = row[13] && row[13] === 'x' ? Y2 : 0,
    otherPMDay = +row[14] || 0,

    BV001 = +row[15] > 0 ? 'MI' : row[7] === 'x' ? 'WO' : 'TAG',
    BN102 = eW || m1 || m2 || m3 || m6 || y1 || y2 || otherPMDay;
  BN102 === 7 ? 0 : BN102;
  const generalObj = {
    rowKey: FC550 + getRandomStr(),
    ID: _generateRowId(FC550, i),
    FB100: 0,
    PB150: 0,
    FS200: 0,
    FS250: 0,
    FC550,
    SV251: _getRealSV251(row[0]),/*BP*/
    BV151: row[1] || '',/*CVBT*/
    BN152: 1,
    BV001,
    BV108: (BV001 === 'WO' && BN102 == 0) ? 'MO' : '',
    BN102,
    BN113: +row[15] || 0,
    eW, m1, m2, m3, m6, y1, y2, otherPMDay,
    stateRow: _getStateRow(row.length),
    dispSv251: _calcstateClsSV251(row[0]),
    BV101: +row[5] || 0,/*SL*/
  };

  if (['M', 'E'].indexOf(FC550) > -1)//PM
    return {
      ...generalObj,
      BN112: FC550 == 'M' ? 1 : 2,
      BN105: 0,
      BN106: 0,
      BV109: '',
      BV110: '',
      BV154: row[2] || '',/*YCKT*/
      BN106: row[3] && row[3] === 'x' ? 1 : 0,/*CVTY*/
      VV501: row[4] || '',/*MVT*/
      BN158: _calcBN158(row[6])
    }
  else if (['T', 'O'].indexOf(FC550) > -1)//PM//BT
    return {
      ...generalObj,
      BN112: FC550 == 'T' ? 1 : 2,
      BV155: row[2] || '',/*CLG*/
      BV153: row[3] || '',/*CLSD*/
      VV501: row[4] || '',/*MVT*/
      BN157: +row[6] || 0,/*SL vị trí*/
    }
}

const _getStateRow = isView => isView ? 'row-view' : 'empty row-edit',

  _calcBN158 = machineState => machineState && (
    _removeUnicode(machineState).toLowerCase() === 'may chay'
    || machineState.toLowerCase() === 'on'
  ) ? 1 : 0,
  _generateRowId = (FC550, i) => FC550 + '-' + i,
  _getRealSV251 = sv251 => sv251 ? sv251.replace('#hide#', '') : '',
  _calcstateClsSV251 = sv251 => sv251 && !sv251.indexOf('#hide#') ? 'fade-out' : '';