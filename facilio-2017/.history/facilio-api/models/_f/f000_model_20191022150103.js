/**
 * F000_MODEL
 * @author Linhnc - 28/11/2017
 */
'use strict'
const Model = require('./../model')

module.exports = class F000_MODEL extends Model {
  constructor() {
    super()
  }

  // ===========================================================================
  // PROCEDURE
  // ===========================================================================

  _listOfTabF000(req_PARAM, callback) {
    const procName = this.SYNONYM.F2017_CUR + 'ListOfTabF000'
    this.oracleUtilModel._callProcerdure(procName, [], callback)
  }

}