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
  _listOfTabN400(req_PARAM, callback) {

    const procName = this.SYNONYM.N2017_CUR + 'ListOfTabN400',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFN850 = !!req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

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
  _listOfTabN400(req_PARAM, callback) {

    const procName = this.SYNONYM.N2017_CUR + 'ListOfTabN400',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFN850 = !!req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

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
  _stornoTabN400(req_PARAM, callback) {

    const funcName = this.SYNONYM.N2017_FACI + 'StornoTabN400',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFN850 = !!req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

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
  _insertTabN400(req_PARAM, callback) {

    const funcName = this.SYNONYM.N2017_FACI + 'InsertTabN400',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFN850 = !!req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvNV401 = !!req_PARAM.pvNV401 ? req_PARAM.pvNV401 : null,
      pvNV402 = !!req_PARAM.pvNV402 ? req_PARAM.pvNV402 : null,
      pvNV403 = !!req_PARAM.pvNV403 ? req_PARAM.pvNV403 : null,
      pnNN404 = !!req_PARAM.pnNN404 ? +req_PARAM.pnNN404 : 0,
      pnNN405 = !!req_PARAM.pnNN405 ? +req_PARAM.pnNN405 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFN850, pnFH200, pvNV401, pvNV402, pvNV403, pnNN404, pnNN405, pvLOGIN], callback)
  }



}