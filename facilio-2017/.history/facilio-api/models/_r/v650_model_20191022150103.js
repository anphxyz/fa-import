/**
 * RB200_MODEL
 * @author Linhnc - 29/11/2017
 */

'use strict'
const Model = require('./../model')

module.exports = class V650_MODEL extends Model {
  constructor() {
    super()
  }

  // ===========================================================================
  // PROCEDURE
  // ===========================================================================

  /**
  * -- CHI PHI VAT TU THEO KY
  * 
  * @param pnFH000
  * @param pnFH200 
  * @param pnFS200
  * @param pnFB050 
  * @param pnFV500 
  * @param pdVD752F
  * @param pdVD752T
  * @param pnOFFSET
  * @param pnLIMIT
  * @param pnSORT
  * @param pnDIRECTION
  * @param pvLOGIN
  */
  _reportOfTabV650(req_PARAM, callback) {

    const procName = this.SYNONYM.R2017_CUR + 'ReportOfTabV650',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFS200 = !!req_PARAM.pnFS200 ? +req_PARAM.pnFS200 : 0,
      pnFB050 = !!req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pnFV500 = !!req_PARAM.pnFV500 ? +req_PARAM.pnFV500 : 0,
      pdVD752F = !!req_PARAM.pdVD752F ? req_PARAM.pdVD752F : null,
      pdVD752T = !!req_PARAM.pdVD752T ? req_PARAM.pdVD752T : null,
      pnOFFSET = !!req_PARAM.pnOFFSET ? +req_PARAM.pnOFFSET : 0,
      pnLIMIT = !!req_PARAM.pnLIMIT ? +req_PARAM.pnLIMIT : 0,
      pnSORT = !!req_PARAM.pnSORT ? +req_PARAM.pnSORT : 0,
      pnDIRECTION = !!req_PARAM.pnDIRECTION ? +req_PARAM.pnDIRECTION : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFS200, pnFB050, pnFV500, pdVD752F, pdVD752T, pnOFFSET, pnLIMIT, pnSORT, pnDIRECTION, pvLOGIN], callback)
  }
    

  // ===========================================================================
  // FUNCTION
  // ===========================================================================

 
}