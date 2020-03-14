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
  _listOfTabC400(params, callback) {

    const procName = this.SYNONYM.C2017_CUR + 'ListOfTabC400',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200L = !!params.pnFH200L ? +params.pnFH200L : 0,
      pnFH200S = !!params.pnFH200S ? +params.pnFH200S : 0,
      pvCV403 = !!params.pvCV403 ? params.pvCV403 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

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
  _insertTabC400(params, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'InsertTabC400',
      pnPC400 = !!params.pnPC400 ? +params.pnPC400 : 0,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvCV401 = !!params.pvCV401 ? params.pvCV401 : null,
      pvCV402 = !!params.pvCV402 ? params.pvCV402 : null,
      pvCV403 = !!params.pvCV403 ? params.pvCV403 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPC400, pnFH000, pnFH200, pvCV401, pvCV402, pvCV403, pvLOGIN], callback)
  }

  /**
   * -- tao moi / chinh sua nguyen nhan cho nhung truong hop hu hong cua may moc
   * -- theo ngon ngu
   * 
   * @param pnPC400
   * @param pvLOGIN
   */
  _stornoTabC400(params, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'StornoTabC400',
      pnPC400 = !!params.pnPC400 ? +params.pnPC400 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPC400, pvLOGIN], callback)
  }

}