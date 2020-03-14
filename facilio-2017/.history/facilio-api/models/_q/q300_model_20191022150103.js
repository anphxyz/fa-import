/**
 * Q300_MODEL
 * @author Toailq - 29/11/2017
 */

'use strict'
const Model = require('./../model')

module.exports = class Q300_MODEL extends Model {
  constructor() {
    super()
  }
  /**
  * danh sach nhung nhom nguoi su dung
  * @param pnFH000  -- phan he chuong trinh su dung     
  * @param pnFN100
  */
  _listOfTabQ300_p2(req_PARAM, callback) {
    const procName = this.SYNONYM.Q2017_CUR + "ListOfTabQ300",
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFN100 = !!req_PARAM.pnFN100 ? +req_PARAM.pnFN100 : 0
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFN100], callback)
  }
  /**
  * danh sach nhung nhom chuc nang ADMIN
  * @param pnFH000  -- phan he chuong trinh su dung     
  * @param pnPQ300
  * @param pnFQ450
  * @param pvLOGIN
  */
  _listOfTabQ300_p4(req_PARAM, callback) {
    const procName = this.SYNONYM.Q2017_CUR + "ListOfTabQ300",
    pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
    pnPQ300 = !!req_PARAM.pnPQ300 ? +req_PARAM.pnPQ300 : 0,
    pnFQ450 = !!req_PARAM.pnFQ450 ? +req_PARAM.pnFQ450 : 0,
    pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnPQ300, pnFQ450, pvLOGIN], callback)
  }
}