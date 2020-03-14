/**
 * Q350_MODEL
 * @author Toailq - 29/11/2017
 */

'use strict'
const Model = require('./../model')

module.exports = class Q350_MODEL extends Model {
  constructor() {
    super()
  }
  /**
  * danh sach nhung nhom nguoi su dung
  * @param pnFH000  -- phan he chuong trinh su dung
  * @param pnPQ350
  * @param pnFH200
  */
  _listOfTabQ350(params, callback) {
    const procName = this.SYNONYM.Q2017_CUR + "ListOfTabQ350",
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnPQ350 = !!params.pnPQ350 ? +params.pnPQ350 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnPQ350, pnFH200], callback)
  }
  
}