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
  _reportOfTabV650(params, callback) {

    const procName = this.SYNONYM.R2017_CUR + 'ReportOfTabV650',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnFV500 = !!params.pnFV500 ? +params.pnFV500 : 0,
      pdVD752F = !!params.pdVD752F ? params.pdVD752F : null,
      pdVD752T = !!params.pdVD752T ? params.pdVD752T : null,
      pnOFFSET = !!params.pnOFFSET ? +params.pnOFFSET : 0,
      pnLIMIT = !!params.pnLIMIT ? +params.pnLIMIT : 0,
      pnSORT = !!params.pnSORT ? +params.pnSORT : 0,
      pnDIRECTION = !!params.pnDIRECTION ? +params.pnDIRECTION : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFS200, pnFB050, pnFV500, pdVD752F, pdVD752T, pnOFFSET, pnLIMIT, pnSORT, pnDIRECTION, pvLOGIN], callback)
  }
    

  // ===========================================================================
  // FUNCTION
  // ===========================================================================

 
}