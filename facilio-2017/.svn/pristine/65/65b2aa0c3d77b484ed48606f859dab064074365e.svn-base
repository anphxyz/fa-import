/**
 * C050_MODEL
 * @author Linhnc - 24/11/2017
 */
'use strict'
const Model = require('./../model')

module.exports = class C050_MODEL extends Model {
  constructor() {
    super()
  }

  // ===========================================================================
  // PROCEDURE
  // ===========================================================================

  /**
   * DANH SACH NGAY NGHI LE TRONG NAM CUA CHI NHANH, CONG TY 
   * @param pnFH000 
   * @param pnFH200 
   * @param pdCD053 
   * @param pdCD054 
   * @param pvLOGIN
   */
  _listOfTabC050(req_PARAM, callback) {

    const procName = this.SYNONYM.C2017_CUR + 'ListOfTabC050',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pdCD053 = !!req_PARAM.pdCD053 ? req_PARAM.pdCD053 : null,
      pdCD054 = !!req_PARAM.pdCD054 ? req_PARAM.pdCD054 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pdCD053, pdCD054, pvLOGIN], callback)
  }
/*************************************************************************************************************************************************/
/*************************************************************************************************************************************************/
/*************************************************************************************************************************************************/

  // ===========================================================================
  // FUNCTION
  // ===========================================================================

  /**
   * -- CAP NHAT THONG TIN VE CAC NGAY NGHI TRONG NAM
   * 
   * @param pnFH000 
   * @param pnFH200 
   * @param pnPC050 -- PC050: ngay nghi le, phep
   * @param pvCV051 -- CV051: nghi hay khong nghi (Y/N)
   * @param pvCV052 -- CV052: ghi chu
   * @param pdCD053
   * @param pdCD054
   * @param pvLOGIN
   */
  _insertTabC050(req_PARAM, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'InsertTabC050',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnPC050 = !!req_PARAM.pnPC050 ? +req_PARAM.pnPC050 : 0,
      pvCV051 = !!req_PARAM.pvCV051 ? req_PARAM.pvCV051 : null,
      pvCV052 = !!req_PARAM.pvCV052 ? req_PARAM.pvCV052 : null,
      pdCD053 = !!req_PARAM.pdCD053 ? req_PARAM.pdCD053 : null,
      pdCD054 = !!req_PARAM.pdCD054 ? req_PARAM.pdCD054 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pnPC050, pvCV051, pvCV052, pdCD053, pdCD054, pvLOGIN], callback)
  }

  /**
   * -- HUY NGAY LE DDANG DDUOC CAP NHAT
   * 
   * @param pnFH000 
   * @param pnFH200 
   * @param pnPC050 
   * @param pvLOGIN 
   */
  _stornoTabC050(req_PARAM, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'StornoTabC050',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnPC050 = !!req_PARAM.pnPC050 ? +req_PARAM.pnPC050 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pnPC050, pvLOGIN], callback)
  }

}