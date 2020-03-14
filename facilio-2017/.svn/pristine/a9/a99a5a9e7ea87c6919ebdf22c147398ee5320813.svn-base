/**
 * N850_MODEL
 * @author Linhnc - 29/11/2017
 */

'use strict'
const Model = require('./../model')

module.exports = class N850_MODEL extends Model {
  constructor() {
    super()
  }

  // ===========================================================================
  // PROCEDURE
  // ===========================================================================

  /**
   * -- cap nhat thong tin nhom nhan vien
   * 
   * @param pvLOGIN
   * @param pnFH000
   * @param pnFH200
   */
  _listOfTabN850(req_PARAM, callback) {

    const procName = this.SYNONYM.N2017_CUR + 'ListOfTabN850',
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null,
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0

    this.oracleUtilModel._callProcerdure(procName, [pvLOGIN, pnFH000, pnFH200], callback)
  }

  // ===========================================================================
  // FUNCTION
  // ===========================================================================

  /**
   *  -- PHONG BAN
   * 
   * @param pnPN850 -- PN850: ID thuoc nhom
   * @param pnFH000 -- FH000: phan he quan ly
   * @param pnFH200 -- FS200: loai dich vu / chuyen mon
   * @param pvNV851 -- NV851: dien giai
   * @param pvNV852 -- NV851: dien giai
   * @param pvNV853 -- NV851: dien giai
   * @param pvNV854 -- NV851: dien giai
   * @param pvNV855 -- NV851: dien giai
   * @param pvLOGIN
   */
  _insertTabN850(req_PARAM, callback) {

    const funcName = this.SYNONYM.N2017_FACI + 'InsertTabN850',
      pnPN850 = !!req_PARAM.pnPN850 ? +req_PARAM.pnPN850 : 0,
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvNV851 = !!req_PARAM.pvNV851 ? req_PARAM.pvNV851 : null,
      pvNV852 = !!req_PARAM.pvNV852 ? req_PARAM.pvNV852 : null,
      pvNV853 = !!req_PARAM.pvNV853 ? req_PARAM.pvNV853 : null,
      pvNV854 = !!req_PARAM.pvNV854 ? req_PARAM.pvNV854 : null,
      pvNV855 = !!req_PARAM.pvNV855 ? req_PARAM.pvNV855 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPN850, pnFH000, pnFH200, pvNV851, pvNV852, pvNV853, pvNV854, pvNV855, pvLOGIN], callback)
  }

  /**
   * -- xoa bo thong tin nhom lam viec
   * 
   * @param pnPN850
   * @param pvLOGIN
   */
  _stornoTabN850(req_PARAM, callback) {

    const funcName = this.SYNONYM.N2017_FACI + 'StornoTabN850',
      pnPN850 = !!req_PARAM.pnPN850 ? +req_PARAM.pnPN850 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPN850, pvLOGIN], callback)
  }

}