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
  _listOfTabQ050(req_PARAM, callback) {
    const procName = this.SYNONYM.Q2017_CUR + "ListOfTabQ050",
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200L = !!req_PARAM.pnFH200L ? +req_PARAM.pnFH200L : 0,
      pnFH200S = !!req_PARAM.pnFH200S ? +req_PARAM.pnFH200S : 0,
      pvNV103 = !!req_PARAM.pvNV103 ? req_PARAM.pvNV103 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200L, pnFH200S, pvNV103, pvLOGIN], callback)
  }
  
}