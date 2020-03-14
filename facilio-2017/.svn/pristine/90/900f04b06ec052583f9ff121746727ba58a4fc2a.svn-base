/**
 * Q150_MODEL
 * @author Toailq - 29/11/2017
 */

'use strict'
const Model = require('./../model')

module.exports = class Q150_MODEL extends Model {
  constructor() {
    super()
  }
  /**
  * danh sach nhung chuc nang KHONG thuoc nhom nguoi su dung
  * @param pnFH000  -- phan he chuong trinh su dung
  * @param pnFQ350
  * @param pnFQ300
  */
  _listOfTabQ150N(req_PARAM, callback) {
    const procName = this.SYNONYM.Q2017_CUR + "ListOfTabQ150N",
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFQ350 = !!req_PARAM.pnFQ350 ? +req_PARAM.pnFQ350 : 0,
      pnFQ300 = !!req_PARAM.pnFQ300 ? +req_PARAM.pnFQ300 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFQ350, pnFQ300, pvLOGIN], callback)
  }
  /**
  * danh sach nhung chuc nang KHONG thuoc nhom nguoi su dung
  * @param pnFH000  -- phan he chuong trinh su dung
  * @param pnFQ350
  * @param pnFQ450
  */
  _listOfTabQ150L(req_PARAM, callback) {
    const procName = this.SYNONYM.Q2017_CUR + "ListOfTabQ150L",
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFQ350 = !!req_PARAM.pnFQ350 ? +req_PARAM.pnFQ350 : 0,
      pnFQ450 = !!req_PARAM.pnFQ450 ? +req_PARAM.pnFQ450 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFQ350, pnFQ450, pvLOGIN], callback)
  }
  /**
  * danh sach nhung chuc nang KHONG thuoc nhom nguoi su dung
  * @param pnFH000  -- phan he chuong trinh su dung
  * @param pnFQ350
  * @param pnFQ450
  */
  _listOfTabQ150R(req_PARAM, callback) {
    const procName = this.SYNONYM.Q2017_CUR + "ListOfTabQ150R",
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFQ350 = !!req_PARAM.pnFQ350 ? +req_PARAM.pnFQ350 : 0,
      pnFQ450 = !!req_PARAM.pnFQ450 ? +req_PARAM.pnFQ450 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFQ350, pnFQ450, pvLOGIN], callback)
  }
  
}