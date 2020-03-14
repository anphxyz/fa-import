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
  _updateColOfTable(params, callback) {

    const funcName = this.SYNONYM.O2017_ORG + 'UpdateColOfTable',
        pvSCHEMA = !!params ? params : null,
        pvTABNAME = !!params ? params : null,
        pvCOLNAME = !!params ? params : null,
        pvVALUE = !!params ? params : null,
        pvPRIMARYKEY = !!params ? params : null,
        pvCONDITION = !!params ? params : null,
        pvLOGIN = !!params ? params : null

    this.oracleUtilModel._callFunction(funcName, [pvSCHEMA, pvTABNAME, pvCOLNAME, pvVALUE, pvPRIMARYKEY, pvCONDITION, pvLOGIN], callback)
  }
}
