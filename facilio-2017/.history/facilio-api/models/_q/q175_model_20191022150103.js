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
  _listOfTabQ175(req_PARAM, callback) {
    const procName = this.SYNONYM.Q2017_CUR + "ListOfTabQ175",
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFQ300 = !!req_PARAM.pnFQ300 ? +req_PARAM.pnFQ300 : 0,
      pnFQ400 = !!req_PARAM.pnFQ400 ? +req_PARAM.pnFQ400 : 0,
      pnFN100 = !!req_PARAM.pnFN100 ? +req_PARAM.pnFN100 : 0,
      targetField = !!req_PARAM.targetField ? req_PARAM.targetField : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFQ300, pnFQ400, pnFN100], callback, targetField)
  }

}