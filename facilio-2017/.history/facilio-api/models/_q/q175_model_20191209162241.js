/**
 * Q175_MODEL
 * @author Toailq - 29/11/2017
 */

'use strict'
const Model = require('./../model')

module.exports = class Q175_MODEL extends Model {
  constructor() {
    super()
  }
  /**
  * danh sach nhung nhom nguoi su dung
  * @param pnFH000  -- phan he chuong trinh su dung
  * @param pnFQ300
  * @param pnFQ400
  * @param pnFN100
  */
  _listOfTabQ175(params, callback) {
    const procName = this.SYNONYM.Q2017_CUR + "ListOfTabQ175",
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFQ300 = !!params.pnFQ300 ? +params.pnFQ300 : 0,
      pnFQ400 = !!params.pnFQ400 ? +params.pnFQ400 : 0,
      pnFN100 = !!params.pnFN100 ? +params.pnFN100 : 0,
      targetField = !!params.targetField ? params.targetField : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFQ300, pnFQ400, pnFN100], callback, targetField)
  }

}