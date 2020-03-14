/**
 * N400_MODEL
 * @author Linhnc - 28/11/2017
 */

'use strict'
const Model = require('./../model')

module.exports = class N400_MODEL extends Model {
  constructor() {
    super()
  }

  // ===========================================================================
  // PROCEDURE
  // ===========================================================================

  /**
   * -- thong tin ve danh sach cty, chi nhanh ma NHOM nhan vien ddung chiu trach nhiem quan ly 
   * 
   * @param pnFH000
   * @param pnFH200
   * @param pnFN850
   * @param pvLOGIN
   */
  _listOfTabN400(params, callback) {

    const procName = this.SYNONYM.N2017_CUR + 'ListOfTabN400',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFN850, pvLOGIN], callback)
  }

  /**
   * -- thong tin ve danh sach cty, chi nhanh ma NHOM nhan vien ddung chiu trach nhiem quan ly 
   * 
   * @param pnFH000
   * @param pnFH200
   * @param pnFN850
   * @param pvLOGIN
   */
  _listOfTabN400(params, callback) {

    const procName = this.SYNONYM.N2017_CUR + 'ListOfTabN400',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFN850, pvLOGIN], callback)
  }

  // ===========================================================================
  // FUNCTION
  // ===========================================================================

  /**
   * -- nhom nhan vien cung voi cac khu vuc QL 
   * 
   * @param pnFH000
   * @param pnFN850
   * @param pnFH200
   * @param pvLOGIN
   */
  _stornoTabN400(params, callback) {

    const funcName = this.SYNONYM.N2017_FACI + 'StornoTabN400',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFN850, pnFH200, pvLOGIN], callback)
  }

  /**
   * -- nhom nhan vien cung voi cac khu vuc QL
   * 
   * @param pnFH000
   * @param pnFN850
   * @param pnFH200
   * @param pvNV401
   * @param pvNV402
   * @param pvNV403
   * @param pnNN404
   * @param pnNN405
   * @param pvLOGIN
   */
  _insertTabN400(params, callback) {

    const funcName = this.SYNONYM.N2017_FACI + 'InsertTabN400',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvNV401 = !!params.pvNV401 ? params.pvNV401 : null,
      pvNV402 = !!params.pvNV402 ? params.pvNV402 : null,
      pvNV403 = !!params.pvNV403 ? params.pvNV403 : null,
      pnNN404 = !!params.pnNN404 ? +params.pnNN404 : 0,
      pnNN405 = !!params.pnNN405 ? +params.pnNN405 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFN850, pnFH200, pvNV401, pvNV402, pvNV403, pnNN404, pnNN405, pvLOGIN], callback)
  }



}