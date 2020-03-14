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
  _listOfTabN900(params, callback) {

    const procName = this.SYNONYM.N2017_CUR + 'ListOfTabN900',
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pnNN104 = !!params.pnNN104 ? +params.pnNN104 : 0

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
  _listOfTabN900R(params, callback) {

    const procName = this.SYNONYM.N2017_CUR + 'ListOfTabN900R',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pvNV901 = !!params.pvNV901 ? params.pvNV901 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

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
  _listOfTabN900L(params, callback) {

    const procName = this.SYNONYM.N2017_CUR + 'ListOfTabN900L',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pvNV901 = !!params.pvNV901 ? params.pvNV901 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

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
  _insertTabN900(params, callback) {

    const funcName = this.SYNONYM.N2017_FACI + 'InsertTabN900',
      pnFN100 = !!params.pnFN100 ? +params.pnFN100 : 0,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pvNV901 = !!params.pvNV901 ? params.pvNV901 : null,
      pvNV902 = !!params.pvNV902 ? params.pvNV902 : null,
      pvNV903 = !!params.pvNV903 ? params.pvNV903 : null,
      pvNV904 = !!params.pvNV904 ? params.pvNV904 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFN100, pnFN850, pvNV901, pvNV902, pvNV903, pvNV904, pvLOGIN], callback)
  }

  /**
   *  -- xoa bo qui trinh cong tac
   * 
   * @param pnFN100 
   * @param pnFN850 
   * @param pvLOGIN 
   */
  _stornoTabN900(params, callback) {

    const funcName = this.SYNONYM.N2017_FACI + 'StornoTabN900',
      pnFN100 = !!params.pnFN100 ? +params.pnFN100 : 0,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFN100, pnFN850, pvLOGIN], callback)
  }

}