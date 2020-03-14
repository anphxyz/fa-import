/**
 * Q200_MODEL
 * @author Toailq - 29/11/2017
 */

'use strict'
const Model = require('./../model')

module.exports = class Q200_MODEL extends Model {
  constructor() {
    super()
  }
  /**
  * danh sach nhan vien KHONG thuoc nhom nguoi su dung Q350
  * @param pnFH000  -- phan he chuong trinh su dung
  * @param pnFQ350
  * @param pnFH200
  */
  _listOfTabQ200N(params, callback) {
    const procName = this.SYNONYM.Q2017_CUR + "ListOfTabQ200N",
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFQ350 = !!params.pnFQ350 ? +params.pnFQ350 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFQ350, pnFH200, pvLOGIN], callback)
  }
  /**
  * danh sach nhan vien thuoc nhom nguoi su dung Q350
  * @param pnFH000  -- phan he chuong trinh su dung
  * @param pnFQ350
  */
  _listOfTabQ200(params, callback) {
    const procName = this.SYNONYM.Q2017_CUR + "ListOfTabQ200",
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFQ350 = !!params.pnFQ350 ? +params.pnFQ350 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFQ350, pvLOGIN], callback)
  }
  
}