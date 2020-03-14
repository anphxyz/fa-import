/**
 * C400_MODEL
 * @author Linhnc - 24/11/2017
 */
'use strict'
const Model = require('./../model')

module.exports = class C400_MODEL extends Model {
  constructor() {
    super()
  }

  /**
   * -- danh sach cac nguyen nhan hu hong, loi dich vu
   * -- theo ngon ngu
   * 
   * @param pnFH000
   * @param pnFH200L
   * @param pnFH200S
   * @param pvCV403
   * @param pvLOGIN
   */
  _listOfTabC400(req_PARAM, callback) {

    const procName = this.SYNONYM.C2017_CUR + 'ListOfTabC400',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200L = !!req_PARAM.pnFH200L ? +req_PARAM.pnFH200L : 0,
      pnFH200S = !!req_PARAM.pnFH200S ? +req_PARAM.pnFH200S : 0,
      pvCV403 = !!req_PARAM.pvCV403 ? req_PARAM.pvCV403 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200L, pnFH200S, pvCV403, pvLOGIN], callback)
  }

  // ===========================================================================
  // FUNCTION
  // ===========================================================================

  /**
   * -- tao moi / chinh sua nguyen nhan cho nhung truong hop hu hong cua may moc
   * -- theo ngon ngu
   * 
   * @param pnPC400
   * @param pnFH000
   * @param pnFH200
   * @param pvCV401
   * @param pvCV402
   * @param pvCV403
   * @param pvLOGIN
   */
  _insertTabC400(req_PARAM, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'InsertTabC400',
      pnPC400 = !!req_PARAM.pnPC400 ? +req_PARAM.pnPC400 : 0,
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvCV401 = !!req_PARAM.pvCV401 ? req_PARAM.pvCV401 : null,
      pvCV402 = !!req_PARAM.pvCV402 ? req_PARAM.pvCV402 : null,
      pvCV403 = !!req_PARAM.pvCV403 ? req_PARAM.pvCV403 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPC400, pnFH000, pnFH200, pvCV401, pvCV402, pvCV403, pvLOGIN], callback)
  }

  /**
   * -- tao moi / chinh sua nguyen nhan cho nhung truong hop hu hong cua may moc
   * -- theo ngon ngu
   * 
   * @param pnPC400
   * @param pvLOGIN
   */
  _stornoTabC400(req_PARAM, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'StornoTabC400',
      pnPC400 = !!req_PARAM.pnPC400 ? +req_PARAM.pnPC400 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPC400, pvLOGIN], callback)
  }

}