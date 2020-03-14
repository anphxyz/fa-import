/**
 * Q050_MODEL
 * @author Toailq - 29/11/2017
 */

'use strict'
const Model = require('./../model')

module.exports = class Q050_MODEL extends Model {
  constructor() {
    super()
  }
  /**
  * danh sach nhan vien moi nhung chua dduoc kich hoat (QN056 = 0)
  * @param pnFH000  -- phan he chuong trinh su dung
  * @param pnFH200L
  * @param pnFH200S
  * @param pvNV103
  */
  _listOfTabQ050(params, callback) {
    const procName = this.SYNONYM.Q2017_CUR + "ListOfTabQ050",
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200L = !!params.pnFH200L ? +params.pnFH200L : 0,
      pnFH200S = !!params.pnFH200S ? +params.pnFH200S : 0,
      pvNV103 = !!params.pvNV103 ? params.pvNV103 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200L, pnFH200S, pvNV103, pvLOGIN], callback)
  }
  
}