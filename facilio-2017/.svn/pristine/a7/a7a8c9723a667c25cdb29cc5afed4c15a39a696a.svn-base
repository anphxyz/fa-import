/**
 * UPDATE_COL_MODEL
 * @author Toailq - 11/01/2018
 */

'use strict'
const Model = require('./../model')

module.exports = class UPDATE_COL_MODEL extends Model {
  constructor() {
    super()
  }

  /**
   * -- Update nhung truong (column) co value la NCLOB va Primary key la Number | Integer | String
   * 
   * @param pvSCHEMA
   * @param pvTABNAME
   * @param pvCOLNAME
   * @param pvVALUE
   * @param pvPRIMARYKEY
   * @param pvCONDITION
   * @param pvLOGIN
   */
  _updateColOfTable(req_PARAM, callback) {

    const funcName = this.SYNONYM.O2017_ORG + 'UpdateColOfTable',
        pvSCHEMA = !!req_PARAM ? req_PARAM : null,
        pvTABNAME = !!req_PARAM ? req_PARAM : null,
        pvCOLNAME = !!req_PARAM ? req_PARAM : null,
        pvVALUE = !!req_PARAM ? req_PARAM : null,
        pvPRIMARYKEY = !!req_PARAM ? req_PARAM : null,
        pvCONDITION = !!req_PARAM ? req_PARAM : null,
        pvLOGIN = !!req_PARAM ? req_PARAM : null

    this.oracleUtilModel._callFunction(funcName, [pvSCHEMA, pvTABNAME, pvCOLNAME, pvVALUE, pvPRIMARYKEY, pvCONDITION, pvLOGIN], callback)
  }
}
