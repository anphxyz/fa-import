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
  _listOfTabQ150N(params, callback) {
    const procName = this.SYNONYM.Q2017_CUR + "ListOfTabQ150N",
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFQ350 = !!params.pnFQ350 ? +params.pnFQ350 : 0,
      pnFQ300 = !!params.pnFQ300 ? +params.pnFQ300 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFQ350, pnFQ300, pvLOGIN], callback)
  }
  /**
  * danh sach nhung chuc nang KHONG thuoc nhom nguoi su dung
  * @param pnFH000  -- phan he chuong trinh su dung
  * @param pnFQ350
  * @param pnFQ450
  */
  _listOfTabQ150L(params, callback) {
    const procName = this.SYNONYM.Q2017_CUR + "ListOfTabQ150L",
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFQ350 = !!params.pnFQ350 ? +params.pnFQ350 : 0,
      pnFQ450 = !!params.pnFQ450 ? +params.pnFQ450 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFQ350, pnFQ450, pvLOGIN], callback)
  }
  /**
  * danh sach nhung chuc nang KHONG thuoc nhom nguoi su dung
  * @param pnFH000  -- phan he chuong trinh su dung
  * @param pnFQ350
  * @param pnFQ450
  */
  _listOfTabQ150R(params, callback) {
    const procName = this.SYNONYM.Q2017_CUR + "ListOfTabQ150R",
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFQ350 = !!params.pnFQ350 ? +params.pnFQ350 : 0,
      pnFQ450 = !!params.pnFQ450 ? +params.pnFQ450 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFQ350, pnFQ450, pvLOGIN], callback)
  }
  
}