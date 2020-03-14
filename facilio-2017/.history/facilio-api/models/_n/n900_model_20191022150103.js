/**
 * N900_MODEL
 * @author Linhnc - 29/11/2017
 */

'use strict'
const Model = require('./../model')

module.exports = class N900_MODEL extends Model {
  constructor() {
    super()
  }

  // ===========================================================================
  // PROCEDURE
  // ===========================================================================

  /**
   * -- nhap, sua thong tin thuoc nhom cua tung nhan vien
   * 
   * @param pvLOGIN
   * @param pnFH000
   * @param pnFH200
   * @param pnFN850 -- FN850: nhom, team lam viec
   * @param pnNN104
   */
  _listOfTabN900(req_PARAM, callback) {

    const procName = this.SYNONYM.N2017_CUR + 'ListOfTabN900',
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null,
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFN850 = !!req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0,
      pnNN104 = !!req_PARAM.pnNN104 ? +req_PARAM.pnNN104 : 0

    this.oracleUtilModel._callProcerdure(procName, [pvLOGIN, pnFH000, pnFH200, pnFN850, pnNN104], callback)
  }

  /**
   * -- DANH SACH NHAN VIEN THUOC NHOM
   * -- NV901 = Y: TRUC THUOC NHOM
   * -- NV901 = N: TRUC THUOC QUAN LY
   * 
   * @param pnFH000
   * @param pnFH200
   * @param pnFN850
   * @param pvNV901 -- NV901: dien giai
   * @param pvLOGIN
   */
  _listOfTabN900R(req_PARAM, callback) {

    const procName = this.SYNONYM.N2017_CUR + 'ListOfTabN900R',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFN850 = !!req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0,
      pvNV901 = !!req_PARAM.pvNV901 ? req_PARAM.pvNV901 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFN850, pvNV901, pvLOGIN], callback)
  }

  /**
   * -- DANH SACH NHAN VIEN KHONG THUOC NHOM
   * -- NV901 = Y: TRUC THUOC NHOM
   * -- NV901 = N: TRUC THUOC QUAN LY
   * 
   * @param pnFH000
   * @param pnFH200
   * @param pnFN850 -- FN850: nhom, team lam viec
   * @param pvNV901 
   * @param pvLOGIN
   */
  _listOfTabN900L(req_PARAM, callback) {

    const procName = this.SYNONYM.N2017_CUR + 'ListOfTabN900L',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFN850 = !!req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0,
      pvNV901 = !!req_PARAM.pvNV901 ? req_PARAM.pvNV901 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFN850, pvNV901, pvLOGIN], callback)
  }

  // ===========================================================================
  // FUNCTION
  // ===========================================================================

  /**
   *  -- nhap, sua thong tin thuoc nhom cua tung nhan vien
   * 
   * @param pnFN100 -- FN100: nhan vien
   * @param pnFN850 -- FN100: nhan vien    
   * @param pvNV901 -- FN850: nhom, team lam viec
   * @param pvNV902 -- NV901: dien giai 
   * @param pvNV903 -- NV902: ghi chu ...
   * @param pvNV904 -- NV904: dien giai
   * @param pvLOGIN
   */
  _insertTabN900(req_PARAM, callback) {

    const funcName = this.SYNONYM.N2017_FACI + 'InsertTabN900',
      pnFN100 = !!req_PARAM.pnFN100 ? +req_PARAM.pnFN100 : 0,
      pnFN850 = !!req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0,
      pvNV901 = !!req_PARAM.pvNV901 ? req_PARAM.pvNV901 : null,
      pvNV902 = !!req_PARAM.pvNV902 ? req_PARAM.pvNV902 : null,
      pvNV903 = !!req_PARAM.pvNV903 ? req_PARAM.pvNV903 : null,
      pvNV904 = !!req_PARAM.pvNV904 ? req_PARAM.pvNV904 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFN100, pnFN850, pvNV901, pvNV902, pvNV903, pvNV904, pvLOGIN], callback)
  }

  /**
   *  -- xoa bo qui trinh cong tac
   * 
   * @param pnFN100 
   * @param pnFN850 
   * @param pvLOGIN 
   */
  _stornoTabN900(req_PARAM, callback) {

    const funcName = this.SYNONYM.N2017_FACI + 'StornoTabN900',
      pnFN100 = !!req_PARAM.pnFN100 ? +req_PARAM.pnFN100 : 0,
      pnFN850 = !!req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFN100, pnFN850, pvLOGIN], callback)
  }

}